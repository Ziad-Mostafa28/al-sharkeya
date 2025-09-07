import React from 'react'
import styles from './EconomicEnvironmental.module.css'

export default function EconomicEnvironmental() {
  return (
    <>
        <section className={`${styles.WhiteSugar}`}>
               <div className={`container-fluid ${styles.customContainer}`}>
                 <div className="row align-items-start">
                   <div className={`col-md-8 ${styles.textBlock}`}>
                     <h2>Economic and Environmental Benefits</h2>
                     <p>
                       Using beet pulp in animal feed also delivers broader advantages:
                       </p>
                       <ul className={`${styles.textBlockul}`}>
                        <li>Maximizing Resource Utilization: Helps reduce agricultural waste by fully utilizing the sugar beet crop.</li>
                        <li>Cost Reduction: Offers a cost-effective alternative to other feed ingredients.</li>
                        <li>Environmental Sustainability: Supports sustainable practices by reducing the sugar industry's waste output.</li>
                       </ul>
                   </div>
       
                   <div className={`col-md-4  ${styles.imageBlock}`}>
                     <img
                       src="../img/our-products/pellets/wood-pellets.png"
                       alt="White sugar"
                     />
                   </div>
                 </div>
               </div>
             </section>
    
    </>
  )
}
