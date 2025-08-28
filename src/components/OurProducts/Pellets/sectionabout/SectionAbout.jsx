import React from 'react'
import styles from "./SectionAbout.module.css";
import CountUp from 'react-countup';

export default function SectionAbout() {
    return (
        <>
            <section>
                <div className={`${styles.about}`}>
                    <div className="container">
                        <div className="row">
                            <h3 className={`${styles.title}`} >Free from Molasse with </h3>

                            <div className="col-12 col-md-6 col-sm-12 col-lg-8">

                                <div className={`${styles.leftSide}`}>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            8 <span className={styles.plus}>-</span>10

                                            <span className={styles.unit}>mm</span>
                                        </div>
                                        <div className={styles.descc}>
                                            <span className={styles.text}>Diameter</span>
                                            <span className={styles.bigDash}>-</span>
                                        </div>
                                    </div>

                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            10 <span className={styles.plus}>-</span>12
                                            <span className={styles.unit}>%</span>
                                        </div>
                                        <div className={styles.descc}>
                                            Humidity
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-sm-12 col-lg-4">
                                <div className={`${styles.rightSide}`}>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            9
                                            <span className={styles.unit}>%</span>
                                        </div>
                                        <div className={styles.descc}>
                                            Protein <br />
                                            Content
                                        </div>
                                    </div>

                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            7
                                            <span className={styles.unit}>%</span>
                                        </div>
                                        <div className={styles.descc}>
                                            Sugar <br />
                                            Content
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
