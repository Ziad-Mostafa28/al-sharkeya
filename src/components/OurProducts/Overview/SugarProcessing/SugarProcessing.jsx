import React from 'react'
import styles from './SugarProcessing.module.css'

export default function SugarProcessing() {
  return (
   <>
 <section className={styles.sugarProcess}>
      <h2>Sugar manufacturing Processing</h2>
      <div className={styles.imageWrapper}>
        <img
          src="/img/our-products/alsharkeya.png"
          alt="Sugar manufacturing Processing"
          className={styles.processImage}
        />
      </div>
    </section>

   
   
   </>
  )
}
