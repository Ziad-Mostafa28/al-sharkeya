import React, { useState } from 'react'
import styles from './JobForm.module.css'
import ApplyFormJob from './ApplyFormJob'

export default function JobForm() {
    const [showModal, setShowModal] = useState(false)

    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    return (
        <>
            <section className={`${styles.WhiteSugar}`}>
                <div className={`container ${styles.customContainer}`}>
                    <div className="row align-items-start">
                        <div className={`col-md-8 ${styles.textBlock}`}>
                            <h2>Submit your CV today and connect with our talent network.</h2>
                            <p>
                                Join a community of professionals and unlock new career opportunities. By sharing your CV, you’ll stay connected with us, receive updates on suitable roles, and be part of a growing network that values your skills and potential.
                            </p>
                            <button className={styles.applyBtn} onClick={handleOpen}>Apply Now</button>
                            {showModal && <ApplyFormJob onClose={handleClose} />}
                        </div>
                        <div className={`col-md-4  ${styles.imageBlock}`}>
                            <img
                                src="/img/our-products/molasses/Rectangle 34624602.png"
                                alt="White sugar"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
