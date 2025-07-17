package com.example.writerjournal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@EntityScan("com.example.writerjournal") // ⬅️ Explicitly scan for @Entity classes
@SpringBootApplication
public class WriterjournalApplication {


	public static void main(String[] args) {
		SpringApplication.run(WriterjournalApplication.class, args);
	}

}
