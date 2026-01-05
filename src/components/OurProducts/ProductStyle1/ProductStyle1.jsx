import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ProductStyle1.module.css';

export default function ProductStyle1({ data }) {
  const lang = useSelector((state) => state.lang.lang);

  if (!data) return null;


  
  
   const isArabic= lang === 'ar';  

  return (
    <section className={styles.WhiteSugar}>
      <div className={`container-fluid ${styles.customContainer}`}>
        <div className="row align-items-center">
          <div className={`col-md-8 ${styles.textBlock}`}>
            <h2>{data.name}</h2>
            <p>{data.description.replace(/<[^>]+>/g, '')}</p>

            <Link to={`/${lang}/our-products/${data.id}`}>
              <button className={styles.readMoreBtn}>{isArabic?'اقرأ المزيد' : 'Read more'} </button>
            </Link>
          </div>

          <div className={`col-md-4 ${styles.imageBlock}`}>
            <img src={data.image} alt={data.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
