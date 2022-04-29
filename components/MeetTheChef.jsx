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
          Joseph started his culinary adventure in Flagstaff Arizona at a place
          called 1899 Bar & Grill while attending Northern Arizona University.
          He worked his way up from line cook to junior sous chef while casually
          adopting the best aspects of styles and techniques he resonated with.
          Through experimentation and iteration he developed his own unique
          style with inspiration mainly drawn from Southern and cajun cuisines.
          However, like many great artists he became was dissatisfied and felt
          stagnant after years of experience. This desire for something new
          drove him to San Francisco - one of the top food city's in the country
          - where he sought to elevate his skills by gaining a deeper,
          traditional understanding of haute cuisine. That's where he attended
          Le Cordon Bleu Culinary School.
        </p>
        <p className={styles.contact}>
          Phone: (415) 123 - 4567 | Email: jwcaters@gmail.com
        </p>
      </div>
    </div>
  );
};

export default MeetTheChef;
