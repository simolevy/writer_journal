import './Header.css';
import { Link } from 'react-router-dom';


export function Header() {
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/write">Write</Link></li>
        <li><Link to="/about">About</Link></li>

      </ul>
    </nav>
  );
}