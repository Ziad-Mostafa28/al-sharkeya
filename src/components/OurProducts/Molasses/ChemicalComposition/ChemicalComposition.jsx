import React from 'react'
import styles from './ChemicalComposition.module.css'

export default function ChemicalComposition() {
  return (
     <section className={`${styles.WhiteSugar}`}>
           <div className={`container-fluid ${styles.customContainer}`}>
             <div className="row align-items-start">
               <div className={`col-md-8 ${styles.textBlock}`}>
                 <h2>Chemical Composition and Nutritional Value</h2>
                 <p>
                    Molasses is rich in carbohydrates, mainly uncrystallized sugars (sucrose, glucose, fructose). It also contains essential minerals, small amounts of vitamins, proteins, amino acids, and other compounds that enhance its flavor and texture. Its high energy content makes it ideal for animal feed.                 </p>
               </div>
   
               <div className={`col-md-4  ${styles.imageBlock}`}>
                 <img
                   src="../img/our-products/molasses/wood-pellets-shutterstock.png"
                   alt="White sugar"
                 />
               </div>
             </div>
           </div>
         </section>
   
  )
}
