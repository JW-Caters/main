import React from "react";
import styles from "../styles/Hero.module.css";
import { GrDown } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Parallax speed={-100}>
          <video
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            onContextMenu="return false;"
            style={{ width: "100vw", height: "100%", objectFit: "cover" }}
          >
            <source src="../videos/roastPork.mp4" type="video/mp4" />
          </video>
        </Parallax>

        <div className={styles.content}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Joseph Walker Catering</h1>
            <h2 className={styles.subTitle}>
              The ultimate in-home fine dining experience
            </h2>
            <IconContext.Provider
              value={{ className: "icon-base-color", id: "downIcon" }}
            >
              <GrDown />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
