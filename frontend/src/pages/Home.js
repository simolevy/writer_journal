import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-text">
        <h1>Welcome to JotterOtter</h1>
        <p>Your thoughts, your words, your journal.</p>
        <a href="/write" className="cta-button">Start Writing Today</a>
      </div>
    </div>
  );
}

export default Home;
