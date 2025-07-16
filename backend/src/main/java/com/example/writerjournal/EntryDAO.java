package com.example.writerjournal;

import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.List;

@Repository
public class EntryDAO {

    private static final List<Entry> entryList = new ArrayList<>();

    static {
        // Initialize with sample entries
        entryList.add(new Entry("day 1", "lorem ipsum blah blah blah", "2018-11-01"));
        entryList.add(new Entry("day 2", "lorem ipsum blah blah blah", "2018-11-02"));
        entryList.add(new Entry("day 3", "lorem ipsum blah blah blah", "2018-11-03"));
    }

    // Retrieve all entries
    public List<Entry> getAllEntries() {
        return entryList;
    }

    // Add a new entry
    public void addEntry(Entry entry) {
        entryList.add(entry);
    }
}
