package com.example.writerjournal;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/entries")
@CrossOrigin(origins = "http://localhost:3000")
public class EntryController {

    private final EntryRepository entryRepository;

    public EntryController(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    @PostMapping
    public ResponseEntity<Void> addEntry(@RequestBody Entry entry) {
        entryRepository.save(entry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public List<Entry> getAllEntries() {
        return entryRepository.findAll();
    }
}
