import React from 'react'
import styles from './TermsDescription.module.css'
export default function TermsDescription() {
  return (
    <>
                <section className={`${styles.privacySection}`}>
                    <div className={`container-fluid ${styles.customContainer}`}>
    
                        <h2 className={styles.sectionTitle}>Introduction</h2>
                        <p>
                            Welcome to our website. By accessing and using this site, you agree to comply with these Terms of Service. If you do not agree, please refrain from using the website. 
                        </p>
    
                        <h3>Company Information</h3>
                        <p>
                            Al Sharkeya Sugar Manufacturing is a sugar manufacturing company based in Egypt, specializing in beet-based sugar production. This website provides information about our company, our products, and how to contact us. 
                        </p>
    
                        <h3>Account Creation </h3>
                        <p>
                            Users may create accounts to access certain features. You are responsible for maintaining the confidentiality of your login information. We reserve the right to suspend or terminate accounts that violate these terms. 
                        </p>
    
                        <h3>Use of Website</h3>
                        <p>
                            You agree not to use this site for any unlawful or harmful purpose. All information provided must be accurate and truthful. You may not engage in any behavior that disrupts or compromises the security of the website. 
                        </p>
    
                        <h3>Intellectual Property</h3>
                        <p>
                            All content on this site, including logos, images, text, and designs, is the intellectual property of Al Sharkeya Sugar Manufacturing unless otherwise stated. Unauthorized use, copying, or distribution is strictly prohibited. 
                        </p>
    
                        <h3>Legal Jurisdiction</h3>
                        <p>
                            These Terms of Service are governed by the laws of Egypt. Any disputes will be handled exclusively in Egyptian courts. 
                        </p>
    
                        <h3>Changes to Terms</h3>
                        <p>
                           We may update these Terms at any time. Continued use of the website indicates acceptance of any modifications. 
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
