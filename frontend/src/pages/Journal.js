// src/pages/Journal.js
import React from "react";
import EntriesList from "../components/EntriesList";
import { useJournalEntries } from "../hooks/useJournalEntries";

function Journal() {
  const { entries } = useJournalEntries();

  return (
    <div>
      <h1>Your Past Entries</h1>
      <EntriesList entries={entries} />
    </div>
  );
}

export default Journal;
