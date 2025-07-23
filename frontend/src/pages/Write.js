// src/pages/Write.js
import React from "react";
import EntryForm from "../components/EntryForm";
import { useJournalEntries } from "../hooks/useJournalEntries";
import { Generate } from "../components/Generate";

function Write() {
  const { entries, addEntry } = useJournalEntries();

  return (
    <div>
      <h1>Start Writing!</h1>
      <Generate />
      <EntryForm onAddEntry={addEntry} />
    </div>
  );
}

export default Write;
