import React from 'react'
import styles from "./CodeSection.module.css";
import { Link } from 'react-router-dom';

export default function CodeSection() {
    return (
        <section className={styles.cardbox}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2>Code of Conduct</h2>
                        <p className={styles.topdesc}>Al Sharkeya Sugar Manufacturing</p>
                        <p>At ASSM, we are committed to conducting our business with integrity, responsibility,
                            and respect — from field to final product. This Code of Conduct defines the
                            principles and standards that guide our operations, partnerships, and daily behavior.</p>

                    </div>
                    <div className="col-12 col-md-4">
                        <img className={styles.bannerImage} src='/img/responsibilities/box5.png' alt="cardbox" />
                    </div>
                </div>
            </div>
        </section>
    )
}
