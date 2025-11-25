import React from 'react'
import styles from './SugerSection.module.css';

export default function SugerSection({ data }) {

     if(!data) return null;    

    return (
        <>
            <section className={styles.SugerSection}>
                <div className={styles.container}>
                    <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>

                    <div className={styles.row}>
                        {data?.list.map((item)=>{
                            return(
                                <div className={styles.col}>
                                    <div className={styles.cardBox}>
                                        <img
                                            src={item?.image}
                                            key={item?.id}
                                            alt={item?.title}
                                            className={styles.image}
                                        />
                                        <h5 className={styles.title}>{item?.title}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    
                        {/* <div className={styles.col}>
                            <div className={styles.cardBox}>
                                <img
                                    src="/img/our-products/white-sugar/Rectangle2.png"
                                    alt="Second Suger"
                                    className={styles.image}
                                />
                                <h5 className={styles.title}>Industrial & Fermentation</h5>
                            </div>
                        </div>

                        <div className={styles.col}>
                            <div className={styles.cardBox}>
                                <img
                                    src="/img/our-products/white-sugar/Rectangle3.png"
                                    alt="Blackstrap Suger"
                                    className={styles.image}
                                />
                                <h5 className={styles.title}>Pharmaceutical & Healthcare</h5>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

        </>
    )
}
