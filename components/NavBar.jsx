import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>Logo</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Menus</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
