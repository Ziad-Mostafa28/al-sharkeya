import React from 'react'
import styles from './SugarBrochure.module.css'

export default function BrochureSugar() {
    return (
        <section className={`${styles.WhiteSugar}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
                <div className="row align-items-center">

                    <div className={`col-md-6  ${styles.imageBlock}`}>
                        <img
                            src="/img/our-products/molasses/image1.png"
                            alt="White sugar"
                        />
                    </div>
                    <div className={`col-md-6 ${styles.textBlock}`}>
                        <p>
                            Molasses is a naturally dense, flavorful syrup valued for its distinctive taste, mineral content, and versatility, widely used in foods, beverages, animal feed, and various industrial processes across cultures and generations
                        </p>
                        <p>
                            It is a richly flavored liquid created during sugar refining that carries a distinctive bittersweet taste and earthy aroma. Its color ranges from dark amber to nearly black, depending on the number of extractions, with blackstrap being the most concentrated form. Beyond its culinary use in baking, sauces, and traditional sweets, molasses is also a key ingredient in animal feed, fermentation industries, and natural remedies. It provides trace minerals like iron, calcium, magnesium, and potassium, making it more than a simple sweetener. Historically valued worldwide, molasses continues to play an important role in both nutrition and industrial production
                        </p>
                        <a href="#" download className={styles.downloadLink}>
                            <img
                                src="/img/our-products/white-sugar/download.svg"
                                alt="Download Icon"
                                className={styles.icon}
                            />
                            <span className={styles.downloadBrochure}>Download Brochure</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
