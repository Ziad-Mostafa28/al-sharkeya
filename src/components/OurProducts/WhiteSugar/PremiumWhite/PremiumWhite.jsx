import React from 'react'
import styles from "./PremiumWhite.module.css"


export default function PremiumWhite() {

    const missionData = {
        title: "Premium White Sugar",
        description: "",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                title: "Consistent Quality",
                subtitle: "Reliable performance for home use and large-scale production.",

            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Food Safety",
                subtitle: "Processed and packaged to meet the highest standards.",
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Versatility",
                subtitle: "Suitable for homes, cafés, bakeries, restaurants, and food industries."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Long Shelf Life",
                subtitle: "Stores well and dissolves easily."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Multiple Functions",
                subtitle: "Sweetening, fermentation, preservation, and browning."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Trusted Sourcing",
                subtitle: "Premium quality from carefully selected suppliers."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Flexible Packaging",
                subtitle: "Available in various sizes for personal or industrial needs."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Perfect Sweetness",
                subtitle: "Enhances everything from simple tea to gourmet desserts."
            }
        ]
    };
    return (
        <section className={styles.OurMission}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h2>{missionData.title}</h2>
                    </div>
                    <div className="col-12 col-md-9">
                        {missionData.description && <p className={styles.desc}>{missionData.description}</p>}

                        <div className={styles.List}>
                            <ul>
                                {missionData.items?.map((item, index) => (
                                    <li key={index} className="d-flex align-items-start gap-3">
                                        <img src={item.icon} alt={`icon-${index}`} />
                                        <div>
                                            <h3 className={styles.titleup}>{item.title}</h3>
                                            <p className={styles.subtitle}>{item.subtitle}</p>


                                            {item.texts?.map((line, i) => (
                                                <p key={i} className={styles.textup}>{line}</p>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
