import React from 'react'
import styles from './SugerSection.module.css';

export default function SugerSection() {
    return (
        <>
            <section className={styles.SugerSection}>
                <div className={styles.container}>
                    <p className={styles.introText}>
                        White sugar is one of the most widely used and versatile ingredients worldwide. In the food and beverage industry, it provides sweetness, enhances flavor, improves texture, and helps in preservation and fermentation. In industrial and fermentation processes, sugar serves as an energy source for microorganisms, supporting the production of products like alcohol, enzymes, and bio-based chemicals. In the pharmaceutical and healthcare sector, it is used as a stabilizer, excipient, and coating agent in tablets and syrups, ensuring both taste and quality. Its multifunctional properties make white sugar an indispensable raw material across diverse industries
                    </p>

                    <div className={styles.row}>
                        {/* First Suger */}
                        <div className={styles.col}>
                            <div className={styles.cardBox}>
                                <img
                                    src="/img/our-products/white-sugar/Rectangle1.png"
                                    alt="First Suger"
                                    className={styles.image}
                                />
                                <h5 className={styles.title}>Food & Beverage</h5>
                            </div>
                        </div>
                        {/* Second Suger */}
                        <div className={styles.col}>
                            <div className={styles.cardBox}>
                                <img
                                    src="/img/our-products/white-sugar/Rectangle2.png"
                                    alt="Second Suger"
                                    className={styles.image}
                                />
                                <h5 className={styles.title}>Industrial & Fermentation</h5>
                            </div>
                        </div>

                        {/* Blackstrap Suger */}
                        <div className={styles.col}>
                            <div className={styles.cardBox}>
                                <img
                                    src="/img/our-products/white-sugar/Rectangle3.png"
                                    alt="Blackstrap Suger"
                                    className={styles.image}
                                />
                                <h5 className={styles.title}>Pharmaceutical & Healthcare</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
