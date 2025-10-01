import React from 'react'
import styles from "./SecBanner.module.css";
import { Link } from "react-router-dom";

export default function SecBanner({ title, subtitle, image }) {


  return (
    <div className={styles.bannercontent}>
      <div className={styles.bannertitle}>
        {subtitle && <h3>{subtitle}</h3>}
        {title && <h1>{title}</h1>}
      </div>

      <div className={styles.slideWrapper}>
        <img
          className={styles.slideImage}
          src={image}
          alt={"banner"}
        />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
