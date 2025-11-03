import React, { useState } from 'react'
import styles from './JobForm.module.css'
import ApplyFormJob from './ApplyFormJob'
import { useSelector } from 'react-redux'

export default function JobForm() {
    const [showModal, setShowModal] = useState(false)

    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

     const { data} = useSelector((state) => state.careers);
    const submitCareers  = data?.data?.main || [];
    const { submit_title,submit_desc,submit_image } = submitCareers;

    return (
        <>
            <section className={`${styles.WhiteSugar}`}>
                <div className={`container-fluid ${styles.customContainer}`}>
                    <div className="row align-items-start">
                         <div className={`col-md-4  ${styles.imageBlock}`}>
                            <img
                                src={submit_image}
                                alt={submit_title}
                            />
                        </div>
                        <div className={`col-md-8 ${styles.textBlock}`}>
                            <h2>{submit_title}</h2>
                            <div
                                dangerouslySetInnerHTML={{ __html:submit_desc}}
                            ></div>
                            <button className={styles.applyBtn} onClick={handleOpen}>Apply Now</button>
                            {showModal && <ApplyFormJob onClose={handleClose} />}
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    )
}
