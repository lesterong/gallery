import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="nav-title">gallery.</div>
      </Link>
      <div>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar
