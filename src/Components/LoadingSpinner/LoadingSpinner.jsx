import React from "react";
import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles.loadingSpinnerContainer}>
      <div className={styles.loadingCircleContainer}>
        <div className={styles.loadingCircle}></div>
        <div className={styles.loadingCircle}></div>
        <div className={styles.loadingCircle}></div>
      </div>
      <p className={`${styles.loadingP} text-preset-6`}>Loading...</p>
    </div>
  );
}

export default LoadingSpinner;
