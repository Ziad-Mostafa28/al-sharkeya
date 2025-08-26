import React, { useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState("touch");

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contact us</h2>

      <div className={styles.container}>
        {/* Left Form Section */}
        <div className={styles.formSection}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === "touch" ? styles.active : ""}`}
              onClick={() => setActiveTab("touch")}
              type="button"
            >
              Get in touch
            </button>
            
            <button
              className={`${styles.tab} ${activeTab === "sales" ? styles.active : ""}`}
              onClick={() => setActiveTab("sales")}
              type="button"
            >
              Contact Sales
            </button>
          </div>

          <form className={styles.form}>
            <input type="text" placeholder="Your name" className={styles.input} />
            <input type="text" placeholder="Your company name" className={styles.input} required />
            <input type="text" placeholder="Your phone number" className={styles.input} />
            <input type="email" placeholder="Your email" className={styles.input} />
            <textarea placeholder="Your message" className={styles.textarea} />
            <div className="w-100 d-flex justify-content-center justify-content-lg-end">
              <button type="submit" className={styles.sendButton}>
              Send {activeTab === "sales" ? "to Sales" : ""}
            </button>
            </div>
            
          </form>
        </div>

        {/* Right Info Section */}
        <div className={styles.infoSection}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Headquarters</h3>
            <p className={styles.cardText}>
              <strong>Ankara Street, Cairo Complex, Bureau 2, 6th Floor, Heliopolis, Cairo, Egypt.</strong><br />
              (+20) 2 26785790 &nbsp; (+20) 10 00073980 <br />
              info@sharkeyasugar.com <br />
              Sales@sharkeyasugar.com
            </p>
            <div  className={styles.divbutton}>
              <button className={styles.visitButton}>Visit</button>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Plant</h3>
            <p className={styles.cardText}>
              <strong>Al Salhyia Al Gadida - Industrial Zone II - Al Sharkeya Governorate</strong><br />
              (+20) 55 3201392 &nbsp; (+20) 55 3201492 <br />
              (+20) 10 26666148 &nbsp; (+20) 55 3201592
            </p>
            <div  className={styles.divbutton}>
              <button className={styles.visitButton}>Visit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
