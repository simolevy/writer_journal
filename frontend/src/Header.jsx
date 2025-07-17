import './Header.css';

export function Header() {
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/journal">Journal</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
