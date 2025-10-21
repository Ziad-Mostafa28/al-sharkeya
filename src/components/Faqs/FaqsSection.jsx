import React, { useState } from "react";
import styles from "./FaqsSection.module.css";
import { useSelector } from "react-redux";

export default function FaqsSection() {
     const { data } = useSelector((state) => state.faqs);

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
                        {data?.data?.list.map((item, index) => (
                            <div key={item.id} className={styles.accor}>
                                <div
                                    className={styles.top_accor}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h2>{item.question}</h2>
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
                                    <div
                                    dangerouslySetInnerHTML={{__html:item.answer}}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
