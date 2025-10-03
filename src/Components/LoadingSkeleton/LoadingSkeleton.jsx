import React from "react";
import styles from "./LoadingSkeleton.module.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
function LoadingSkeleton() {
  return (
    <div className={styles.loadingSkeletonContainer}>
      <div className={styles.skeletonGroup1}>
        <div className={styles.currentWeatherAndDetails}>
          <section className={styles.currentWeather}>
            <LoadingSpinner />
          </section>
          <div className={styles.weatherDetailsContainer}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.weatherDetailSkeleton}>
                <p className={`${styles.detailsTitle} text-preset-6`}>
                  Feels Like
                </p>
                <h3 className={`${styles.detailsValue} text-preset-3`}>¯</h3>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.dailyForecastContainerSkeleton}>
          <p className={`${styles.skeletonTitle} text-preset-5`}>
            Daily forecast
          </p>
          <div className={styles.dailyForecastGroup}>
            {[...Array(7)].map((_, index) => (
              <div key={index} className={styles.dailyForecastItem}></div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.skeletonGroup2}>
        <div className={styles.hourlyForecastContainerSkeleton}>
          <div className={styles.hourlyForecastHeader}>
            <p className={`${styles.hourlyForecastTitle} text-preset-5`}>
              Hourly forecast
            </p>
            <button className={`${styles.skeletonButton} text-preset-7`}>
              -
              <img
                className={styles.dropdownIcon}
                src="/images/icon-dropdown.svg"
                alt="dropdown"
              />
            </button>
          </div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.hourlyForecastGroup}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
