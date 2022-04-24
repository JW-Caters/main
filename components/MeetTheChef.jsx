import React from "react";
import styles from "../styles/MeetTheChef.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const MeetTheChef = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* <img src="/images/joseph.jpeg" /> */}
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>Meet The Chef</h1>
        <p className={styles.desc}>
          I'm a paragraph. Click here to add your own text and edit me. Its
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. Im a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p>Phone: (415) 123 - 4567 | Email: jwcaters@gmail.com</p>
      </div>
    </div>
  );
};

export default MeetTheChef;
