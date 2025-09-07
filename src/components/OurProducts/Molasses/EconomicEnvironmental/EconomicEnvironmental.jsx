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
                       The use of molasses supports sustainability and circular economy principles:
                       </p>
                       <ul className={`${styles.textBlockul}`}>
                        <li>Increased Added Value: Converts a by product into a valuable commodity, maximizing the use of the sugar beet crop.</li>
                        <li>Waste Reduction: Minimizes industrial waste and supports eco-friendly production.</li>
                        <li>Resource Efficiency: Offers a local energy source for animal feed, decreasing dependency on imported components.</li>
                       </ul>
                   </div>
       
                   <div className={`col-md-4  ${styles.imageBlock}`}>
                     <img
                       src="../img/our-products/molasses/wood-pellets.png"
                       alt="White sugar"
                     />
                   </div>
                 </div>
               </div>
             </section>
    
    </>
  )
}
