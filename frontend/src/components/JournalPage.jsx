// src/components/JournalPage.jsx
import React from "react";
import EntryForm from "./EntryForm";
import EntriesList from "./EntriesList";
import { useJournalEntries } from "../hooks/useJournalEntries";

function JournalPage() {
  const { entries, addEntry } = useJournalEntries();

  return (
    <div className="journal-page">
      <EntryForm onAddEntry={addEntry} />
      <EntriesList entries={entries} />
    </div>
  );
}

export default JournalPage;
