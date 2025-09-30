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
            a: [
                "Sugar was first extracted from sugarcane in India around 500 BC.",
                "It was considered a luxury and was used in medicine during the Middle Ages",
                "Sugar trade influenced global exploration and colonization",
            ]
        },
        {
            q: "Chemical and Nutritional Composition",
            a: [
                "Chemically, sugar is made of carbon, hydrogen, and oxygen (C₆H₁₂O₆).",
                "It contains no essential nutrients, only calories", 
            ]
        },
        {
            q: "Global Sugar Consumption",
            a: [
                "The average global sugar consumption is over 50 kg per person per year",
                "The United States, Brazil, and India are top consumers and producers.",
            ]
        },
        {
            q: "Sugar and the Food Industry",
            a: [
                "Sugar is used in soft drinks, desserts, sauces, and baked goods",
                "It adds sweetness, texture, and acts as a preservative",
                "High-Fructose Corn Syrup (HFCS) is a common industrial sweetener",
            ]
        },
        {
            q: "Sugar and Performance",
            a: [
                "Short bursts of sugar can help in endurance sports like marathons",
                "Sports drinks often contain glucose and electrolytes",
            ]
        },
        {
            q: "Sugar and the Brain",
            a: [
                "Sugar activates the brain’s reward center, releasing dopamine",
                "Over time, this can create patterns similar to addiction",
            ]
        },
        {
            q: "Sugar Alternatives",
            a: [
                "Stevia ",
                "Erythritol ",
                "Xylitol",
                "These are low-calorie or zero-calorie options used in health-focused products",
            ]
        },
        {
            q: "Tips for Reducing Sugar Intake",
            a: [
                "Read food labels for hidden sugars.",
                "Choose water over sugary drinks.",
                "Eat whole fruits instead of fruit juices",
                "Cook at home to control ingredients.",
            ]
        },
        {
            q: "Biological Facts",
            a: [
                "The brain uses glucose as its main energy source.",
                "Sugar is absorbed in the small intestine and processed by the liver.",
                "Insulin regulates blood sugar levels.",
            ]
        },
        {
            q: "Energy Facts",
            a: [
                "1 gram of sugar provides 4 calories.",
                "Sugar gives quick energy but may lead to crashes.",
                "Athletes use sugar for a fast energy boost.",
            ]
        },
        {
            q: "Did You Know?",
            a: [
                "Sugar can act as a preservative in jams and jellies.",
                "The average adult consumes over 17 teaspoons of added sugar daily.",
                "Sugar was once called “white gold.",
                "Sugar affects dopamine levels in the brain.",
                "Not all sugars are the same—natural sugars differ from processed ones.",
            ]
        },
        {
            q: "Conclusion",
            a: [
                "Sugar is deeply embedded in global culture, economy, and diet. By learning its facts, we can use it wisely and maintain a healthier life.",
            ]
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
                                    className={`${styles.answer} ${openIndex === index ? styles.open : ""}`}
                                >
                                    {Array.isArray(item.a) ? (
                                        <ul>
                                            {item.a.map((fact, i) => (
                                                <li key={i}>{fact}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.a}</p>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
