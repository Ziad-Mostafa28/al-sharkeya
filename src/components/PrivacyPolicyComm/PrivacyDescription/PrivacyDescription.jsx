import React from 'react'
import styles from './PrivacyDescription.module.css'

export default function PrivacyDescription() {
    return (
        <>

            <section className={`${styles.privacySection}`}>
                <div className={`container-fluid ${styles.customContainer}`}>

                    <h2 className={styles.sectionTitle}>Introduction</h2>
                    <p>
                       Al Sharkeya Sugar Manufacturing (AL Nouran) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your data. 
                    </p>

                    <h3>Information We Collect </h3>
                    <p>We may collect the following types of personal information:</p>
                    <ul className={styles.customList}>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>IP address</li>
                    </ul>

                    <h3>Use of Collected Information</h3>
                    <p>Your information may be used to:</p>
                    <ul className={styles.customList}>
                        <li>Create and manage your account</li>
                        <li>Respond to inquiries</li>
                        <li>Improve our website experience</li>
                        <li>Analyze user trends via analytics tools</li>
                    </ul>

                    <h3>Cookies and Analytics</h3>
                    <p>
                        We use cookies and Google Analytics to understand website traffic and user behavior. You may control cookie settings through your browser. 
                    </p>

                    <h3>Data Sharing</h3>
                    <p>
                        Al Sharkeya Sugar Manufacturing (AL Nouran) does not sell, rent, or share your personal information with third parties, except as required by law. 
                    </p>

                    <h3>International Access</h3>
                    <p>
                       Our website is accessible to users outside Egypt. If you are accessing the site internationally, your data may be stored on servers located in other jurisdictions. 
                    </p>

                    <h3>Data Security</h3>
                    <p>
                       We implement appropriate security measures to protect your personal information against unauthorized access or disclosure. 
                    </p>

                    <h3>Your Rights</h3>
                    <p>
                        You have the right to access, correct, or delete your personal data. To exercise your rights, contact us at the details provided below. 
                    </p>

                    <h3>Changes to Policy</h3>
                    <p>
                       We may revise this Privacy Policy from time to time. Updates will be posted on this page. 
                    </p>

                    <h3>Contact</h3>
                    <p>
                        If you have questions about these Terms, please contact us at:
                        <br />
                        <strong>Email:</strong>  info@sharkeyasugar.com
                        <br />
                        <strong>Phone:</strong> +20553201592
                    </p>

                </div>

            </section>

        </>
    )
}
