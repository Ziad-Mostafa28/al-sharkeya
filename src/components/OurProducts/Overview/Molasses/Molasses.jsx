import React from 'react'
import styles from './Molasses.module.css'
import { Link } from 'react-router-dom'

export default function Molasses() {
  return (
   <>

 <section className={styles.molassesSection}>
      <div className={styles.imageWrapper}>
        <img
          src="/img/our-products/Molasses.png"
          alt="Molasses"
          className={styles.bgImage}
        />

        <div className={styles.textCard}>
          <h2>Molasses</h2>
          <p>
            The syrup separated off during the final crystallization step is
            known as molasses.
          </p>
          <p>
            Molasses is a valuable ingredient for the baking yeast and animal
            feed industry as well as for the production of alcohol.
          </p>
          <Link to={"/our-products/molasses"}>
            <button className={styles.readMoreBtn}>Read more</button>

          </Link>
        </div>
      </div>
    </section>
   
   
   
   </>
  )
}
