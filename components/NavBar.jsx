import React, { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { CgMenu, CgClose } from "react-icons/cg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <div className={styles.menuWrapper}>
        <div>
          <span>logo</span>
        </div>
        <div>
          <button onClick={handleMenu} className={styles.btn}>
            <CgMenu size="2rem" />
          </button>
        </div>
      </div>
      <div className={showMenu ? styles.overlayOpen : styles.overlayClosed}>
        <div className={styles.closeBtnWrapper}>
          <button onClick={handleMenu} className={styles.btn}>
            <CgClose size="2rem" />
          </button>
        </div>
        <div className={styles.menuContent}>
          <a className={styles.menuItem}>Home</a>
          <a className={styles.menuItem}>Menus</a>
          <a className={styles.menuItem}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
