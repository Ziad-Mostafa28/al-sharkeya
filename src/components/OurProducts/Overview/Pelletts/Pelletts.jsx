import React from 'react'
import styles from './Pelletts.module.css'

export default function Pelletts() {
  return (
   <>
         <section className={`${styles.WhiteSugar}`}>
           <div className={`container-fluid ${styles.customContainer}`}>
             <div className="row align-items-center">
               <div className={`col-md-7 ${styles.textBlock}`}>
                 <h2>Pelletts</h2>
                 <p>
                   The cossettes from which the sugar juice is derived in the extraction tower are mechanically pressed and dried in a drying tunnel before being pelleted and sold as animal feed.
                 </p>
                 <button className={styles.readMoreBtn}>Read more</button>
               </div>
   
               <div className={`col-md-5  ${styles.imageBlock}`}>
                 <img
                   src="../img/our-products/wood-pellets-shutterstock.png"
                   alt="White sugar"
                 />
               </div>
             </div>
           </div>
         </section>
   
   
   </>
  )
}
