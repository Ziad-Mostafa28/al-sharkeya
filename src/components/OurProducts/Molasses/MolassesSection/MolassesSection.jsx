import React from 'react'
import styles from './MolassesSection.module.css';

export default function MolassesSection() {
  return (
    <>
 <section className={styles.molassesSection}>
      <div className={styles.container}>
        <p className={styles.introText}>
          Molasses is rich in vitamins and minerals, including vitamin B6, iron,
          calcium, magnesium, and potassium. There are different types of molasses
          depending on the amount of time refined.
        </p>

        <div className={styles.row}>
          {/* First Molasses */}
          <div className={styles.col}>
            <div className={styles.cardBox}>
              <img
                src="/img/our-products/molasses/Rectangle1.png"
                alt="First Molasses"
                className={styles.image}
              />
              <h5 className={styles.title}>First Molasses</h5>
              <p className={styles.desc}>the highest sugar content occurred when processed three crystallization steps or less</p>
            </div>
          </div>

          {/* Second Molasses */}
          <div className={styles.col}>
            <div className={styles.cardBox}>
              <img
                src="/img/our-products/molasses/Rectangle2.png"
                alt="Second Molasses"
                className={styles.image}
              />
              <h5 className={styles.title}>Second Molasses</h5>
              <p className={styles.desc}>intermediate sugar content occurred when processed five crystallization steps or less</p>
            </div>
          </div>

          {/* Blackstrap Molasses */}
          <div className={styles.col}>
            <div className={styles.cardBox}>
              <img
                src="/img/our-products/molasses/Rectangle3.png"
                alt="Blackstrap Molasses"
                className={styles.image}
              />
              <h5 className={styles.title}>Third molasses ( blackstrap molasses ) </h5>
              <p className={styles.desc}>the darkest, most robust in flavor and lowest sugar content occurred when crystallization steps more than 5 steps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
