import React, { useState } from 'react'
import styles from "./FactsSection.module.css";

export default function FactsSection() {
    const Facts = [
        {
            q: "What is Sugar?",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Historical Facts",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Chemical and Nutritional Composition",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Global Sugar Consumption",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Sugar and the Food Industry",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Sugar and Performance",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Sugar and the Brain",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Sugar Alternatives",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Tips for Reducing Sugar Intake",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Biological Facts",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Energy Facts",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Did You Know?",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        },
        {
            q: "Conclusion",
            a: "Sugar is a simple carbohydrate that provides energy. It can be natural (from fruits, vegetables, and dairy) or added during food processing."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFACTS = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.FactsSectionSection}>
            <div className={`${styles.container}`}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className={styles.image}>
                            <img src="/img/recipes/image.png" alt="FACTS" />
                        </div>
                    </div>
                    <div className="col-12 mt-4 mt-md-0 col-md-8">
                        {Facts.map((item, index) => (
                            <div key={index} className={styles.accor}>
                                <div
                                    className={styles.top_accor}
                                    onClick={() => toggleFACTS(index)}
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
