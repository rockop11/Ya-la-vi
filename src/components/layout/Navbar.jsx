import React from "react";
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <Link to="/">Inicio</Link>
        <Link to="/vistas">Ya la vi</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
