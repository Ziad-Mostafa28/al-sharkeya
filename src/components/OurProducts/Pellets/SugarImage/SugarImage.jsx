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
            <h2>Animal Feed: Added Value from Sugar Beet Production</h2>
             <p>
             Sugar beet is a crop of significant economic importance, serving as a primary source of sugar in many countries worldwide. However, beyond sugar, it also produces a valuable byproduct: beet pulp, widely used in animal feed.

             </p>
           </div>
         </div>
       </section>
   
   
   </>
  )
}
