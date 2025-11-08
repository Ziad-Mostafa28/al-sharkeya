import React from 'react';
import styles from './ProductStyle2.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductStyle2({ data }) {
  const lang = useSelector((state) => state.lang.lang);

  if (!data) return null;

  return (
    <section className={styles.molassesSection}>
      <div className={styles.imageWrapper}>
        <img src={data.image} alt={data.name} className={styles.bgImage} />

        <div className={styles.textCard}>
          <h2>{data.name}</h2>
          <p>{data.description.replace(/<[^>]+>/g, '')}</p>

          <Link to={`/${lang}/our-products/${data.id}`}>
            <button className={styles.readMoreBtn}>Read more</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
