package com.example.writerjournal;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RestController
@RequestMapping("/entries")
public class EntryController {

    @Autowired
    private EntryDAO entryDAO;

    public EntryController(EntryDAO entryDAO) {
        this.entryDAO = entryDAO;
    }

    @PostMapping
    public ResponseEntity<Void> addEntry(@RequestBody Entry entry) {
        entryDAO.addEntry(entry);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public List<Entry> getAllEntries() {
        return entryDAO.getAllEntries();
    }

    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
}

}
