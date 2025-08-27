import React from 'react'
import styles from './SugarImage.module.css'

export default function SugarImage() {
  return (
   <>


    <section className={styles.molassesSection}>
         <div className={styles.imageWrapper}>
           <img
             src="/img/our-products/white-sugar/group2.png"
             alt="Molasses"
             className={styles.bgImage}
           />
   
           <div className={styles.textCard}>
             <p>
              The pure, crystal-clear sugar appears white when subjected to white light. White sugar contains at least 99.7% sucrose. The remainder is in effect moisture.

             </p>
           </div>
         </div>
       </section>
   
   
   </>
  )
}
