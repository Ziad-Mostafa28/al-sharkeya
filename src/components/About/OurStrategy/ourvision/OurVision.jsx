import React from 'react'
import styles from "./OurVision.module.css";

export default function OurVision() {
    return (
        <section className={styles.cardbox2}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2 className='mb-4'>Our Vision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src='/img/aboutus/8.png' alt="cardbox" />
                    </div>
                </div>
            </div>
        </section>
    )
}
