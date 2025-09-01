import React, { useState } from 'react'
import styles from './JopDetailsInfo.module.css'
import ApplyModal from './ApplyModal'

export default function JopDetailsInfo() {

   const [showModal, setShowModal] = useState(false)

  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <section className={`${styles.jobDetails}`}>
      <div className={`container-fluid ${styles.customContainer}`}>

        {/* Job Header */}
        <h3 className={styles.jobTitle}>Jop Title</h3>

        <div className={styles.jobInfoBox}>
          <div className={styles.jobItem}>
            <span>Date:</span> <strong>22/2/2005</strong>
          </div>
          <div className={styles.jobItem}>
            <span>Area:</span> <strong>Lorem ipsum dolor sit amet</strong>
          </div>
          <div className={styles.jobItem}>
            <span>Location:</span> <strong>Headquarters</strong>
          </div>
          <div className={styles.jobItem}>
            <span>Experience:</span> <strong>2-3 years</strong>
          </div>
        </div>

        {/* Job Description */}
        <div className={styles.jobDescription}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>

          <h5>Lorem ipsum dolor sit amet</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>

          <h5>Lorem ipsum dolor sit amet</h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</li>
          </ul>

          <h5>Lorem ipsum dolor sit amet</h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</li>

          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-4">
          <button className={styles.applyBtn}  onClick={handleOpen}>Apply Now</button>
        </div>

        {showModal && <ApplyModal onClose={handleClose} />}


      </div>
    </section>
  )
}
