import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles['nav-title']}>gallery.</Link>
      <div>
        <Link to="/about" className={styles["nav-link"]}>About</Link>
        <Link to="/contact" className={styles["nav-link"]}>Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar
