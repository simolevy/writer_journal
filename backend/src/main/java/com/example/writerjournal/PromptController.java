package com.example.writerjournal;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.http.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpRequest; // ✅ this one

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PromptController {

    @Value("${openai.api.key}")
    private String apiKey;

    @PostMapping("/api/generate-prompt")
public ResponseEntity<String> generatePrompt() {
    try {
        HttpClient client = HttpClient.newHttpClient();

        String body = """
            {
              "model": "gpt-3.5-turbo",
              "messages": [{"role": "user", "content": "Give me a creative writing prompt for a journal entry."}]
            }
            """;

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.openai.com/v1/chat/completions"))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(body))
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Debug log the raw response body
        System.out.println("RAW OpenAI response:\n" + response.body());

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(response.body());

        JsonNode choices = root.path("choices");

        if (choices.isArray() && choices.size() > 0) {
            JsonNode message = choices.get(0).path("message");
            String content = message.path("content").asText();
            return ResponseEntity.ok(content);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("No prompt found in response.");
        }

    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                             .body("Error: " + e.getMessage());
    }
}
}
