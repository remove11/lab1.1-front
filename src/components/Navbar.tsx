import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navItem}>Home</NavLink>
      <NavLink to="/encounter" className={styles.navItem}>Encounter</NavLink>
      <NavLink to="/medicalCondition" className={styles.navItem}>Medical Condition</NavLink>
      <NavLink to="/message" className={styles.navItem}>Message</NavLink>
    </nav>
  )
}

export default Navbar;