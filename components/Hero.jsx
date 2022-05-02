import React from "react";
import styles from "../styles/Hero.module.css";
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ParallaxBanner } from "react-scroll-parallax";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ParallaxBanner speed={-100}>
          <video
            autoPlay
            muted
            defaultmuted="true"
            loop
            playsInline
            preload="auto"
            onContextMenu="return false;"
            className={styles.video}
            style={{ width: "100vw", height: "100%", objectFit: "cover" }}
          >
            <source src="../videos/roastPork.mp4" type="video/mp4" />
          </video>
        </ParallaxBanner>

        <div className={styles.content}>
          <div className={styles.wrapper}>
            <h2 className={styles.subTitle}>
              The ultimate in-home fine dining experience
            </h2>
            <div className={styles.iconWrapper}>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
