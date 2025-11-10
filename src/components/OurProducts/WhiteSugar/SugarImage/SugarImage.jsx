// import React from 'react'
// import styles from './SugarImage.module.css'

// export default function SugarImage() {
//   return (
//    <>


//     <section className={styles.molassesSection}>
//          <div className={styles.imageWrapper}>
//            <img
//              src="/img/our-products/white-sugar/group2.png"
//              alt="Molasses"
//              className={styles.bgImage}
//            />
   
//            <div className={styles.textCard}>
//              <p>
//               The pure, crystal-clear sugar appears white when subjected to white light. White sugar contains at least 99.7% sucrose. The remainder is in effect moisture.

//              </p>
//            </div>
//          </div>
//        </section>
   
   
//    </>
//   )
// }


import React from 'react';
import styles from './SugarImage.module.css';

export default function SugarImage({ data }) {
  if (!data) return null;

  const { description, background_image } = data;

  return (
    <section className={styles.molassesSection}>
      <div className={styles.imageWrapper}>
        {background_image && (
          <img
            src={background_image}
            alt="Product"
            className={styles.bgImage}
          />
        )}

        {description && (
          <div className={styles.textCard} dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </section>
  );
}
