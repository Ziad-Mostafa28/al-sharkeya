import React from 'react'
import styles from './BecomeSupplier.module.css'

export default function BecomeSupplier() {
  return (
    <>
    <section className={styles.supplierSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Become a Supplier</h2>
        <p className={styles.subtitle}>Join us and become a supplier.</p>

        <form className={styles.form}>
          <input type="text" placeholder="Your name*" required />
          <input type="text" placeholder="Your company name" />
          <input type="tel" placeholder="Your phone number*" required />
          <input type="email" placeholder="Your email" />
          
          <select required>
            <option value="">Your governorate*</option>
            <option value="cairo">Cairo</option>
            <option value="giza">Giza</option>
            <option value="alexandria">Alexandria</option>
          </select>

          <input type="text" placeholder="Land area*" required />
          <textarea placeholder="Your message"></textarea>

          <button type="submit" className={styles.sendBtn}>Send</button>
        </form>
      </div>
    </section>
    
    
    </>
  )
}
