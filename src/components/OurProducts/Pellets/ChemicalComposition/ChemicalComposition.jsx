import React from 'react'
import styles from './ChemicalComposition.module.css'

export default function ChemicalComposition() {
  return (
     <section className={`${styles.WhiteSugar}`}>
           <div className={`container-fluid ${styles.customContainer}`}>
             <div className="row align-items-start">
               <div className={`col-md-7 ${styles.textBlock}`}>
                 <h2>Nutritional Value of Beet Pulp</h2>
                 <p>
                  Beet pulp is a nutritious and palatable feed ingredient, rich in digestible fiber and energy. It supports digestive health, especially in ruminants, provides moderate protein, is low in fat, and is well-accepted by animals, making it a valuable addition to animal diets.                    </p>
               </div>
   
               <div className={`col-md-5  ${styles.imageBlock}`}>
                 <img
                   src="../img/our-products/pellets/wood-pellets-shutterstock.png"
                   alt="White sugar"
                 />
               </div>
             </div>
           </div>
         </section>
   
  )
}
