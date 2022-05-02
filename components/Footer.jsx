import React from "react";
import styles from "../styles/Footer.module.css";
import { BsInstagram, BsTelephoneFill, BsMailbox2 } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container} id="footer">
      <div className={styles.socials}>
        <a
          className={styles.item}
          href="https://www.instagram.com/chef_josephwalker/"
        >
          <BsInstagram size={30} />
          jwcaters
        </a>
        <a className={styles.item}>
          <BsTelephoneFill size={30} />
          (415) 123 - 4567
        </a>
        <a
          className={styles.item}
          href="malito:jwcaters@gmail.com?subject=Request%A%Proposal"
        >
          <BsMailbox2 size={30} />
          email us
        </a>
      </div>

      <div className={styles.logo}>
        <img src="/images/whiteLogoCropped.png" className={styles.logoImage} />
      </div>
    </div>
  );
};

export default Footer;
