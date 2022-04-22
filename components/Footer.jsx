import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <h3>Joseph Walker Catering</h3>
        </div>
        <div className={styles.section}>
          <h3>Get In Touch</h3>
        </div>
        <div className={styles.section}>
          <h3>Follow Our Journey</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
