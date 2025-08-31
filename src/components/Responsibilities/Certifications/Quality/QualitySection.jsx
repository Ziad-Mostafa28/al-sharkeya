import React from 'react'
import styles from "./QualitySection.module.css";

export default function QualitySection() {
    const data = {
        title: "Quality & Safety Certifications",
        description: "",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                text: "ISO 9001:2015 for quality management"
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "BRCGS V9, ISO 22000, and FSSC 22000 for food safety."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "ISO 45001:2018 for occupational health and safety"
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "ISO 14001:2015 for environmental management"
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Halal certification for Sharia compliance"
            }
        ],
        desc1: "As part of its pursuit of leadership in the sugar industry, Al Sharqia Sugar applies the latest international quality and safety standards. The company holds several key certifications:",
        desc2: "The company is the first beet sugar factory on the Egyptian Food Safety Authority's whitelist, confirming the safety and quality of its products.",
        desc3: "Additionally, Sharqia Laboratory is internationally accredited with ISO/IEC 17025:2017 for white sugar analysis, ensuring accurate and reliable testing",
    };
    return (
        <section className={styles.QualitySection}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h2>{data.title}</h2>
                        {data.description && <p className={styles.desc}>{data.description}</p>}
                    </div>
                    <div className="col-12 col-md-9">
                        <div className={styles.List}>
                            <p className={styles.tob_desc}>
                                {data.desc1}
                            </p>
                            <ul>
                                {data.items?.map((item, index) => (
                                    <li key={index} className="d-flex align-items-start gap-3">
                                        <img src={item.icon} alt={`icon-${index}`} />
                                        <p>{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                            <p className={styles.tob_desc}>
                                {data.desc2}
                            </p>
                            <p className={styles.tob_desc}>
                                {data.desc3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
