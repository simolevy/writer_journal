import { useState, useEffect } from "react";

export function useJournalEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error("Failed to fetch entries", err));
  }, []);

  const addEntry = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
  };

  return { entries, addEntry };
}