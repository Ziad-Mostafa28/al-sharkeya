import React from 'react'
import styles from './SugarProcessing.module.css'
import { useSelector } from 'react-redux';

export default function SugarProcessing() {
   const { data} = useSelector((state) => state.productsOverview);
    const productsOverview  = data?.data?.main || [];
        const {manufacturing_process_title,manufacturing_process_image} = productsOverview ;
  return (
   <>
 <section className={styles.sugarProcess}>
      <h2>{manufacturing_process_title}</h2>
      <div className={styles.imageWrapper}>
        <img
          src={manufacturing_process_image}
          alt="Sugar manufacturing Processing"
          className={styles.processImage}
        />
      </div>
    </section>

   
   
   </>
  )
}
