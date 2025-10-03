import React from "react";
import styles from "./ErrorMessage.module.css";
import { useWeather } from "../../contexts/WeatherContext";

function ErrorMessage() {
  const { retry } = useWeather();

  return (
    <div className={styles.errorMessageContainer}>
      <img
        className={styles.errorIcon}
        src="/images/icon-error.svg"
        alt="errorIcon"
      />
      <h2 className={`${styles.errorTitle} text-preset-2`}>
        Something went wrong
      </h2>
      <p className={`${styles.errorParagraph} text-preset-5-medium`}>
        We couldn't connect to the server (API error). please try again in a few
        moments
      </p>
      <button onClick={retry} className={`${styles.errorButton} text-preset-7`}>
        <img
          className={styles.retryIcon}
          src="/images/icon-retry.svg"
          alt="retryIcon"
        />
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;
