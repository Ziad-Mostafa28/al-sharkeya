import React from 'react'
import styles from './SugarBrochure.module.css'

export default function BrochureSugar() {
    return (
        <section className={`${styles.WhiteSugar}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
                <div className="row align-items-center">

                    <div className={`col-md-6  ${styles.imageBlock}`}>
                        <img
                            src="../img/our-products/white-sugar/image1.png"
                            alt="White sugar"
                        />
                    </div>
                    <div className={`col-md-6 ${styles.textBlock}`}>
                        <p>
                          White sugar, also called table sugar, granulated sugar, or regular sugar, is a commonly used type of sugar, made either of beet sugar or cane sugar, which has undergone a refining process. It is nearly pure sucrose.
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
