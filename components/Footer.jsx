import React from "react";
import styles from "../styles/Footer.module.css";
import {
  BsInstagram,
  BsTwitter,
  BsTelephoneFill,
  BsMailbox2,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.socials}>
        <li className={styles.item}>
          <BsInstagram size={30} />
          jwcaters
        </li>
        <li className={styles.item}>
          <BsTwitter size={30} />
          jwcaters
        </li>
        <li className={styles.item}>
          <BsTelephoneFill size={30} />
          (415) 123 - 4567
        </li>
        <li className={styles.item}>
          <BsMailbox2 size={30} />
          jwcaters@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default Footer;
