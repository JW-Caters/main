import React from "react";
import styles from "../styles/HeroMessage.module.css";

const HeroMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Joseph Walker Catering & Events</div>
      <div className={styles.description}>
        Joseph Walker Catering is the premier catering and events company of
        choice in Northern California. We create remarkable experiences by
        offering the finest quality foods and providing unsurpassed personalized
        service, driven by our passion for life’s special occasions.
      </div>
    </div>
  );
};

export default HeroMessage;
