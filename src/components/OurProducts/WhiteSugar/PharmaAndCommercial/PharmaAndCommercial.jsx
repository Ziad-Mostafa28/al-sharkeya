import React from 'react'
import styles from "./PharmaAndCommercial.module.css";


export default function PharmaAndCommercial() {
  return (
   <section className={styles.sugarSection}>
      {/* Card 1 */}
      <div className={styles.card}>
        <img
          src="/img/our-products/white-sugar/Rectangle34.png"
          alt="Pharma & Specialized Industrial Sugar Grades"
          className={styles.image}
        />
        <div className={styles.text}>
          <h3>Pharma & Specialized Industrial Sugar Grades</h3>
          <p>
            Our sugar is precisely refined to meet exact pharmaceutical and
            customized industrial specifications.
          </p>
          <p>
            Each batch is accompanied by a detailed analytical test report,
            verifying full compliance with pharmaceutical and specialized
            industrial requirements.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className={styles.card}>
        <img
          src="/img/our-products/white-sugar/Rectangle31.png"
          alt="Commercial Sugar"
          className={styles.image}
        />
        <div className={styles.text}>
          <h3>Commercial Sugar</h3>
          <p>
            A versatile, all-purpose sugar ideal for sweetening hot beverages,
            sprinkling over cereals or fruits, and for everyday use in cooking
            and baking.
          </p>
          <p>
            Its consistent quality and purity make it suitable for a wide range
            of food and beverage manufacturing processes, as well as various
            chemical industries.
          </p>
        </div>
      </div>
    </section>
  )
}
