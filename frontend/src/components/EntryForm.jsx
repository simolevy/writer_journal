import './EntryForm.css';
import { useState } from 'react';

function EntryForm({ onAddEntry }) {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = { subject, body, date };

    try {
      const res = await fetch("http://localhost:8080/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });

      if (res.ok) {
        onAddEntry(newEntry); // ⬅️ Notify parent
        setSubject('');
        setBody('');
        setDate('');
      } else {
        alert("Failed to add entry.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <label>
        Subject:
        <input value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label>
        Body:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default EntryForm;
