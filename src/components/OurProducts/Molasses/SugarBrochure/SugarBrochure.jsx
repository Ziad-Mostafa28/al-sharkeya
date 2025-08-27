import React from 'react'
import styles from './SugarBrochure.module.css'

export default function BrochureSugar() {
    return (
        <section className={`${styles.WhiteSugar}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
                <div className="row align-items-center">

                    <div className={`col-md-6  ${styles.imageBlock}`}>
                        <img
                            src="../img/our-products/molasses/image1.png"
                            alt="White sugar"
                        />
                    </div>
                    <div className={`col-md-6 ${styles.textBlock}`}>
                        <p>
                            The syrup separated off during the final crystallization step is known as molasses.
                        </p>
                        <p>
                            Molasses is a valuable ingredient for the baking yeast and animal feed industry as well as for the production of alcohol.
                        </p>
                        <a href="#" download className={styles.downloadLink}>
                            <img
                                src="../img/our-products/white-sugar/download.svg"
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
