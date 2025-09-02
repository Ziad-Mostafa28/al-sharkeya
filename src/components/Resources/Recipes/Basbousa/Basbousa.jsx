import React from 'react'
import styles from './Basbousa.module.css'

export default function Basbousa() {
    return (
        <>
            <section className={styles.molassesSection}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/img/recipes/basbosa.png"
                        alt="Molasses"
                        className={styles.bgImage}
                    />

                    <div className={styles.textCard}>
                        <h2>Basbousa</h2>
                        <h5>30 min</h5>
                        <p>
                            is a traditional Middle Eastern semolina cake soaked in sweet syrup. Soft, moist, and slightly crumbly, it’s often flavored with coconut, rose water, or orange blossom and topped with almonds. This beloved dessert offers a perfect balance of rich texture and syrupy sweetness, making it a favorite at gatherings and celebrations.
                        </p>
                        <button className={styles.readMoreBtn}>Read more</button>
                    </div>
                </div>
            </section>
        </>
    )
}
