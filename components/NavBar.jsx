import React from "react";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { GrSchedule, GrCart } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <IconContext.Provider
            value={{ className: "icon-base-color", id: "scheduleIcon" }}
          >
            <GrSchedule />
          </IconContext.Provider>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>BOOK NOW!</div>
          <div className={styles.text}>(123) 456 - 7891 </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>LOGO</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <IconContext.Provider
            value={{ className: "icon-base-color", id: "cartIcon" }}
          >
            <GrCart />
          </IconContext.Provider>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
