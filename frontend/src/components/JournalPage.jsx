import React, { useState, useEffect } from "react";
import EntryForm from "./EntryForm";
import EntriesList from "./EntriesList";

function JournalPage() {
  const [entries, setEntries] = useState([]);

  // Fetch entries on initial load
  useEffect(() => {
    fetch("http://localhost:8080/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error("Failed to fetch entries", err));
  }, []);

  // Add new entry to local state after submitting
  const handleAddEntry = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  return (
    <div className="journal-page">
      <EntryForm onAddEntry={handleAddEntry} />
      <EntriesList entries={entries} />
    </div>
  );
}

export default JournalPage;
