import React from 'react'
import styles from './SugarBrochure.module.css'

export default function BrochureSugar() {
    return (
        <section className={`${styles.WhiteSugar}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
                <div className="row align-items-center">

                    <div className={`col-md-6  ${styles.imageBlock}`}>
                        <img
                            src="/img/our-products/pellets/image1.png"
                            alt="White sugar"
                        />
                    </div>
                    <div className={`col-md-6 ${styles.textBlock}`}>
                        <p>
                            Pellets are made from the residual cells of sugar beet roots after sugar extraction. They are rich in nutritional value, highly palatable, and can replace up to 50% of the grain requirement in daily animal feed                        </p>
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
