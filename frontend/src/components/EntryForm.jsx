import { useState } from 'react';

function EntryForm(){
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        const newEntry = {subject, body, date};
        console.log("Submitting:", newEntry); 


        const res = await fetch("http://localhost:8080/entries", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subject, body, date }),
        });

        if (res.ok) {
            alert("Entry added!");
            // clear the form or trigger re-fetch
          } else {
            alert("Failed to add entry.");
          }
        };
      
        return ( 
          <form onSubmit={handleSubmit}>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Submit Entry</button>
          </form>
        );
      }
      
      export default EntryForm;