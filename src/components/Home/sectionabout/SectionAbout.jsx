import React from 'react'
import styles from "./SectionAbout.module.css";
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

export default function SectionAbout() {
    return (
        <>
            <section >
                <div className={`${styles.about}`}>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-7 col-xl-5 order-1 order-md-2">
                            <div className={styles.image_box}>
                                <img className={styles.first_image} src="/img/homepage/about1.png" alt="" />
                                <img className={styles.second_image} src="/img/homepage/about2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
                            <div className='h-100  d-flex  flex-column justify-content-center'>
                                <h2 className={`${styles.title}`}>About Us</h2>
                                <p className={`${styles.desc}`}>
                                    Al Sharkeya Sugar Manufacturing (Al Nouran) S.A.E. specializes in sugar beet breeding and harvesting, producing premium-quality white sugar using the latest technologies and strict good manufacturing practices
                                </p>
                                <div className={`${styles.numbox}`}>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            <span className={styles.plus}>+</span>
                                            <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce />
                                        </div>
                                        <div className={styles.descc}>
                                            Years of
                                            <br />
                                            Experience
                                        </div>
                                    </div>

                                    {/* <div className={styles.smallbox}>
                            <div className={styles.numberBox}>
                                <span className={styles.plus}>+</span>
                                <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce/>
                            </div>
                            <div className={styles.descc}>
                                Completed
                                <br />
                                Production
                            </div>
                            </div> */}
                                </div>
                                <div className={`w-100 d-flex justify-content-center justify-content-lg-end`}>
                                    <Link to={'about-us/who-we-are'}>
                                        <button> Read More</button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-6 col-lg-7 col-xl-5">
                    <div className={`${styles.image_box}`}>
                        <img className='w-100' src="/img/homepage/about1.png" alt="" />
                        <img className={`${styles.second_image}`} src="/img/homepage/about2.png" alt="" />
                    </div>
                </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
