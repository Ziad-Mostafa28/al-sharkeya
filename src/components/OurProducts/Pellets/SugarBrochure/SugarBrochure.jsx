import React from 'react'
import styles from './SugarBrochure.module.css'

export default function BrochureSugar() {
    return (
        <section className={`${styles.WhiteSugar}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
                <div className="row align-items-center">

                    <div className={`col-md-6  ${styles.imageBlock}`}>
                        <img
                            src="../img/our-products/pellets/image1.png"
                            alt="White sugar"
                        />
                    </div>
                    <div className={`col-md-6 ${styles.textBlock}`}>
                        <p>
                            It is the remaining cells of the sugar beet roots after extracting the sugar liquid from them. It represents about 5% of the sugar beet crop. It has a high nutritional value and a palatable taste. It can replace half of the grain requirement in the daily feed of animals.
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
