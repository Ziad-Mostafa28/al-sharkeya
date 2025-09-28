import React from 'react'
import styles from './WhiteSugar.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function WhiteSugar() {
      const lang = useSelector((state) => state.lang.lang);

  return (
    <>

      <section className={`${styles.WhiteSugar}`}>
        <div className={`container-fluid ${styles.customContainer}`}>
          <div className="row align-items-center">
            <div className={`col-md-8 ${styles.textBlock}`}>
              <h2>White Sugar</h2>
              <p>
                White sugar, also known as refined sugar or granulated sugar, is a common sweetener made by extracting and purifying sucrose from sugar beet plants or sugarcane. It is typically white in color, fine in texture, and consists of nearly pure sucrose. White sugar is a versatile and essential ingredient found in kitchens and food production around the world
              </p>

              <Link to={`/${lang}/our-products/white-sugar`}>
                <button className={styles.readMoreBtn}>Read more</button>
              </Link>
            </div>

            <div className={`col-md-4  ${styles.imageBlock}`}>
              <img
                src="/img/our-products/Whitesugar.png"
                alt="White sugar"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
