import React from 'react'
import styles from './Basbousa.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Basbousa() {

    const { data, loading } = useSelector((state) => state.recipe);
    // console.log(data?.data.random_recipe);

    const lang = useSelector((state) => state.lang.lang);
    const isArabic = lang === 'ar';
    if (loading || !data?.data.random_recipe) return null;

    const recipe = data?.data?.random_recipe

    return (
        <>
            <section className={styles.molassesSection}>
                <div className={styles.imageWrapper}>
                    <img
                        
                        src={recipe.banner}
                        alt={recipe.name}
                        className={styles.bgImage}
                    />

                    <div className={styles.textCard}>
                        <h2>{recipe.name}</h2>
                        <h5>{recipe.time}</h5>
                        <div
                            className={styles.desc}
                            dangerouslySetInnerHTML={{ __html: recipe.desc }}
                        />
                        {/* <button className={styles.readMoreBtn}>Read more</button> */}
                        <Link
                            to={`/${lang}/recipe-details/${recipe.id}`}
                            className={styles.readMoreBtn}
                        >
                            {isArabic ? 'اقرأ أكثر' : 'Read More'}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
