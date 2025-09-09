import React, { useState } from "react";
import styles from "./FaqsSection.module.css";

export default function FaqsSection() {
    const faqs = [
        {
            q: "What does the company specialize in?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Where is your factory located?",
            a: "Our main factory is located in New Salhiya city / Sharkeya Government"
        },
        {
            q: "When was the company established?",
            a: "ASSM was established in 2014"
        },
        {
            q: "What types of sugar do you produce?",
            a: "We produce white sugar suitable for food and industrial use"
        },
        {
            q: "Is your sugar certified for food safety?",
            a: "Yes, it is certified under ISO 22000, FSSC 22000, and BRCGS."
        },
        {
            q: "What quality certifications does your factory hold?",
            a: " ASSM has many certifications, click here to see all the certifications that ASSM has"
        },
        {
            q: "Are your products Halal certified?",
            a: "Yes, all our products are Halal certified."
        },
        {
            q: "Is your company on the EFSA white list",
            a: "Yes, we are the first beet sugar factory on the EFSA white list."
        },
        {
            q: "How can I place an order?",
            a: "To become our customer you can use the online Contact Sales form, and our sales team will be happy to contact you"
        },
        {
            q: "Do you sell to individuals or only to businesses?",
            a: "We primarily serve B2B clients, but retail orders may be arranged."
        },
        {
            q: "What is the minimum order quantity",
            a: "MOQ depends on the product and packaging. Contact us for details"
        },
        {
            q: "Do you export your products?",
            a: "Yes, we export to many countries."
        },
        {
            q: "What packaging options are available?",
            a: "Retail packs 50kg"
        },
        {
            q: "What is your approach to environmental sustainability?",
            a: "We follow ISO 14001 and manage waste responsibly."
        },
        {
            q: "Do you have a certified laboratory?",
            a: "Yes, accredited under ISO/IEC 17025:2017."
        },
        {
            q: "What is the source of your sugar?",
            a: "Our sugar is derived from sugar beet and Raw sugar."
        },
        {
            q: "Do you work with local farmers?",
            a: "Yes, we work with contracted local farmers."
        },
        {
            q: "What technologies do you use?",
            a: "We use advanced extraction, purification, and crystallization systems."
        },
        {
            q: "How do you ensure quality consistency?",
            a: "Through automation and lab testing."
        },
        {
            q: "What documents do you provide for export?",
            a: "We provide CO, Halal, lab reports, etc."
        },
        {
            q: "What is the shelf life of your sugar?",
            a: "Up to 5 years in proper storage."
        },
        {
            q: "Is your sugar suitable for baking/beverages?",
            a: "Yes, it's designed for industrial and food use."
        },
        {
            q: "Does it contain additives or preservatives?",
            a: "No, it's 100% pure sucrose."
        },
        {
            q: "Are you compliant with regulations?",
            a: "Yes, we comply with Egyptian and international laws."
        },
        {
            q: "How can I apply for a job?",
            a: "Submit your CV to our careers email or our website."
        },
        {
            q: "Do you offer factory tours?",
            a: "Yes, for partners or educational visits."
        },
        {
            q: "Can I access your lab for testing?",
            a: "External access may be granted by agreement."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.FaqsSectionSection}>
            <div className={`${styles.container}`}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className={styles.image}>
                            <img src="/img/faqs/small.png" alt="faq" />
                        </div>
                    </div>
                    <div className="col-12 mt-4 mt-md-0 col-md-8">
                        {faqs.map((item, index) => (
                            <div key={index} className={styles.accor}>
                                <div
                                    className={styles.top_accor}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h2>{item.q}</h2>
                                    <img
                                        src={
                                            openIndex === index
                                                ? "/img/faqs/up.png"
                                                : "/img/faqs/down.png"
                                        }
                                        alt="toggle"
                                    />
                                </div>
                                <div
                                    className={`${styles.answer} ${openIndex === index ? styles.open : ""
                                        }`}
                                >
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
