// import React from 'react'
// import styles from './ChemicalCompositionLeft.module.css'

// export default function ChemicalCompositionLeft() {
//   return (
//      <section className={`${styles.WhiteSugar}`}>
//           <div className={`container-fluid ${styles.customContainer}`}>
//             <div className="row align-items-start">

                    
//               <div className={`col-md-4  ${styles.imageBlock}`}>
//                 <img
//                   src="/img/our-products/molasses/wood-pellets-shutterstock.png"
//                   alt="White sugar"
//                 />
//               </div>
              
//               <div className={`col-md-8 ${styles.textBlock}`}>
//                 <h2>Chemical Composition and Nutritional Value</h2>
//                 <p>
//                   mmmMolasses is rich in carbohydrates, mainly uncrystallized sugars (sucrose, glucose, fructose). It also contains essential minerals, small amounts of vitamins, proteins, amino acids, and other compounds that enhance its flavor and texture. Its high energy content makes it ideal for animal feed
//                 </p>
//               </div>

//             </div>
//           </div>
//         </section>
//   )
// }


import React from 'react';
import styles from './ChemicalCompositionLeft.module.css';

export default function ChemicalCompositionLeft({ data }) {
  if (!data) return null;

  const { title, description, image } = data;

  return (
    <section className={`${styles.WhiteSugar}`}>
      <div className={`container-fluid ${styles.customContainer}`}>
        <div className="row align-items-start">

          <div className={`col-md-4 ${styles.imageBlock}`}>
            {image && <img src={image} alt={title || 'Product Image'} />}
          </div>

          <div className={`col-md-8 ${styles.textBlock}`}>
            {title && <h2>{title}</h2>}
            {description && (
              <div 
              dangerouslySetInnerHTML={{ __html: description }} >
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
