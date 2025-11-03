import React from 'react'
import styles from './Pelletts.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Pelletts() {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <>
      <section className={`${styles.WhiteSugar}`}>
        <div className={`container-fluid ${styles.customContainer}`}>
          <div className="row align-items-center">
            <div className={`col-md-8 ${styles.textBlock}`}>
              <h2>Pellets</h2>
              <p>
                The cossettes from which the sugar juice is derived in the extraction tower are mechanically pressed and dried in a drying tunnel before being pelleted and sold as animal feed.
                This process preserves valuable nutrients such as fiber and minerals, making the pellets a rich and sustainable feed source. . .
              </p>
              <Link to={`/${lang}/our-products/pellets`}>
                <button className={styles.readMoreBtn}>Read more</button>

              </Link>
            </div>

            <div className={`col-md-4  ${styles.imageBlock}`}>
              <img
                src="/img/our-products/wood-pellets-shutterstock.png"
                alt="White sugar"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
