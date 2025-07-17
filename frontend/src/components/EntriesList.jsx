import React from 'react';
import './EntriesList.css'; // optional, if you want custom styling

function EntriesList({ entries }) {
  if (!entries.length) {
    return <p className="empty-msg">No entries yet. Start journaling!</p>;
  }

  return (
    <div className="entries-list">
      {entries.map((entry, idx) => (
        <div className="entry-card" key={idx}>
          <h3>{entry.subject}</h3>
          <p className="entry-date">{entry.date}</p>
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  );
}

export default EntriesList;
