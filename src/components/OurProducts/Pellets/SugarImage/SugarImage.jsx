import React from 'react'
import styles from './SugarImage.module.css'

export default function SugarImage() {
  return (
    <>


      <section className={styles.molassesSection}>
        <div className={styles.imageWrapper}>
          <img
            src="/img/our-products/pellets/group2.png"
            alt="Molasses"
            className={styles.bgImage}
          />

          <div className={styles.textCard}>
            <h2>Sugar Beet: More Than Just Sugar</h2>
            <p>
              Sugar beet is a crop of major economic value and a key source of sugar across many countries. In addition to sugar, it yields an important byproduct—beet pulp—which is extensively used as a nutritious component in animal feed
            </p>
          </div>
        </div>
      </section>


    </>
  )
}
