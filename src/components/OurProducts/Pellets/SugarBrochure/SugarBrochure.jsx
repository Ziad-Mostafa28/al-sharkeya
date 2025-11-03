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
                            The cossettes from which the sugar juice is derived in the extraction tower are mechanically pressed and dried in a drying tunnel before being pelleted and sold as animal feed.
                            This process preserves valuable nutrients such as fiber and minerals, making the pellets a rich and sustainable feed source.
                            By utilizing every part of the sugar beet, we minimize waste and contribute to a circular, environmentally responsible production cycle.
                        </p>
                        {/* <a href="#" download className={styles.downloadLink}>
                            <img
                                src="/img/our-products/white-sugar/download.svg"
                                alt="Download Icon"
                                className={styles.icon}
                            />
                            <span className={styles.downloadBrochure}>Download Brochure</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>

    )
}
