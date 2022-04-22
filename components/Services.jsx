import React from "react";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.message}>
          Breathtaking events for all of lifes occasions
        </div>
        <div className={styles.eventTypes}>
          <div>weddings</div>
          <div>social</div>
          <div>corporate</div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Services;
