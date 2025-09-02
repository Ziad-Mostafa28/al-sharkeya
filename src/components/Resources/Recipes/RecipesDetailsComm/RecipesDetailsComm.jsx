import React from 'react'
import styles from './RecipesDetailsComm.module.css'
import { Link } from 'react-router-dom'

export default function RecipesDetailsComm() {
  return (
    <>
    <section className={`${styles.recipeSection}`}>
      <div className={`container-fluid ${styles.customContainer}`}>
              <Link to="/recipes" className={styles.backLink}>
        <img src='img/recipes/arrow-down.png' alt='img-icon'/> Back to recipes
      </Link>

      <h2 className={`${styles.recipetitle}`} >Kunafa with Cream</h2>

      <div className="text-center mb-4">
        <img src="/img/recipes/Rectangle1.png" alt="Kunafa with Cream" className={`${styles.recipeImg}`} />
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <h5 className={styles.prepListTitle}>Preparation:</h5>
          <ol className={styles.prepList}>
            <li>Mix kunafa with ghee until well coated.</li>
            <li>Press half into greased pan to form base.</li>
            <li>Spread cream evenly, avoiding edges.</li>
            <li>Cover with remaining kunafa and press lightly.</li>
            <li>Bake at 180°C for 25–30 mins until golden.</li>
            <li>Pour cooled syrup over hot kunafa.</li>
          </ol>
        </div>

        <div className="col-md-4">
          <h5 className="fw-bold">Ingredients:</h5>
          <ul className={styles.ingredients}>
            <li>
              <span>Kunafa dough</span> <strong>500g</strong>
            </li>
            <li>
              <span>Ghee</span> <strong>½ cup</strong>
            </li>
            <li>
              <span>Cream</span> <strong>1 cup</strong>
            </li>
            <li>
              <span>Powdered sugar (optional)</span> <strong>2 tbsp</strong>
            </li>
          </ul>
        </div>
      </div>

      </div>
    </section>
    </>
  )
}
