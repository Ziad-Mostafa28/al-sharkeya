import React, { useState } from "react";
import styles from "./FaqsSection.module.css";

export default function FaqsSection() {
    const faqs = [
        {
            q: "What does Al Sharkeya Sugar Manufacturing (ALNouran) specialize in?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Where is your factory located?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "When was Al Sharkeya Sugar Manufacturing (ALNouran) established?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What types of sugar do you produce?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Is your sugar certified for food safety?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What quality certifications does your factory hold?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Are your products Halal certified?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Is your company on the EFSA white list?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "How can I place an order?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Do you sell to individuals or only to businesses?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What is the minimum order quantity?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Do you export your products?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What packaging options are available?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What is your approach to environmental sustainability?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Do you have a certified laboratory?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What is the source of your sugar?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Do you work with local farmers?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What technologies do you use?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "How do you ensure quality consistency?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What documents do you provide for export?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "What is the shelf life of your sugar?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Is your sugar suitable for baking/beverages?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Does it contain additives or preservatives?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Are you compliant with regulations?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "How can I apply for a job?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Do you offer factory tours?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
        },
        {
            q: "Can I access your lab for testing?",
            a: "We specialize in the production of high-quality white sugar derived from sugar beet."
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
