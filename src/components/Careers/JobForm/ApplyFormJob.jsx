import React from 'react'
import styles from '../JopDetailsInfo/JopDetailsInfo.module.css'

export default function ApplyFormJob({ onClose }) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                <h2 className={styles.title}>Apply your CV</h2>
                <form className={styles.form}>
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Your email" />
                    <input type="text" placeholder="Your phone number" />
                    {/* Upload CV */}
                    <label className={styles.uploadBox}>
                        Upload your CV
                        <input type="file" accept=".pdf,.doc,.docx" hidden />
                        <span className={styles.icon}>
                            <img src="/img/careers/attachment-line.svg" alt="Upload Icon" />
                        </span>
                    </label>
                    <div className={styles.btns}>
                        <button type="submit" className={styles.sendBtn}>Send</button>
                        <button type="button" className={styles.cancelBtn} onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
