import React from 'react'
import styles from './Pelletts.module.css'
import { Link } from 'react-router-dom'

export default function Pelletts() {
  return (
   <>
         <section className={`${styles.WhiteSugar}`}>
           <div className={`container-fluid ${styles.customContainer}`}>
             <div className="row align-items-center">
               <div className={`col-md-8 ${styles.textBlock}`}>
                 <h2>Pelletts</h2>
                 <p>
                   The cossettes from which the sugar juice is derived in the extraction tower are mechanically pressed and dried in a drying tunnel before being pelleted and sold as animal feed.
                 </p>
                  <Link to={"/our-products/pellets"}>
                    <button className={styles.readMoreBtn}>Read more</button>

                  </Link>
               </div>
   
               <div className={`col-md-4  ${styles.imageBlock}`}>
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
