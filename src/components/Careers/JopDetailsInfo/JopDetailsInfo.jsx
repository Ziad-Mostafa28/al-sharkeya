import React, { useState } from 'react'
import styles from './JopDetailsInfo.module.css'
import ApplyModal from './ApplyModal'
import { useLocation, useNavigate } from 'react-router-dom'

export default function JopDetailsInfo() {
  const [showModal, setShowModal] = useState(false)
  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const location = useLocation()
  const navigate = useNavigate()
  const job = location.state?.job 

  if (!job) {
    navigate('/careers') 
    return null
  }

  return (
    <section className={`${styles.jobDetails}`}>
      <div className={`container-fluid ${styles.customContainer}`}>
        {/* Job Header */}
        <h3 className={styles.jobTitle}>{job.title}</h3>

        <div className={styles.jobInfoBox}>
          <div className={styles.jobItem}>
            <span>Date:</span> <strong>{job.job_date}</strong>
          </div>
          <div className={styles.jobItem}>
            <span>Area:</span> <strong>{job.area?.name || '-'}</strong>
          </div>
          <div className={styles.jobItem}>
            <span>Location:</span> <strong>{job.location?.name || '-'}</strong>
          </div>
          <div className={styles.jobItem}>
            <span>Experience:</span> <strong>{job.experience}</strong>
          </div>
        </div>

        {/* Job Description */}
        <div className={styles.jobDescription}>
          <div
          dangerouslySetInnerHTML={{ __html:job.description }}
          ></div>
        </div>

        {/* Apply Button */}
        <div className="mt-4">
          <button className={styles.applyBtn} onClick={handleOpen}>
            Apply Now
          </button>
        </div>

        {showModal && <ApplyModal onClose={handleClose} jobId={job.id} />}
      </div>
    </section>
  )
}
