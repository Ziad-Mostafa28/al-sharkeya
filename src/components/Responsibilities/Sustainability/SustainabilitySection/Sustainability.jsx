import React from 'react'
import styles from "./Sustainability.module.css";
import { Link } from 'react-router-dom';

export default function Sustainability() {

    return (
        <section className={styles.cardbox}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2>Sustainability</h2>
                        <p className={styles.topdesc}>Inspiring Action, Delivering Impact: Turning Challenges into Sweeter Solutions</p>
                        <p>At Al Sharkeya Sugar Manufacturing (ASSM), we believe that sustainable success goes hand-in-hand with responsible business practices. Our 2024 Annual Report marks a significant milestone as our  <span>#first comprehensive Sustainability Report#</span>, offering a transparent and insightful overview of how we integrate environmental, social, and governance principles into our operations. We are committed to creating long-term value not only for our shareholders but also for the communities we serve and the planet we all share.</p>

                        <Link to="#"><img src="/img/responsibilities/mdi_download.png" alt="" />Download Report</Link>
                    </div>
                    <div className="col-12 col-md-4">
                        <img className={styles.bannerImage} src='/img/responsibilities/image.png' alt="cardbox" />
                    </div>
                </div>
            </div>
        </section>
    );
}
