import './Header.css';
import { Link } from 'react-router-dom';
import JotterOtter from './assets/JotterOtter.png';

export function Header() {
  return (
    <nav className="main-nav">
      <h1>Jotter</h1>
      <div className="nav-left" />
      <div className="logo">
        <img src={JotterOtter} alt="JotterOtter logo" />
      </div>
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/write">Write</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
