import React from 'react'
import styles from "./PremiumWhite.module.css"


export default function PremiumWhite() {

    const missionData = {
        title: "Qualities of Our Sugar",
        description: "",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                title: "Consistent Quality",
                subtitle: "Delivers dependable results for everyday use and large-scale production",

            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Food Safety",
                subtitle: "Manufactured and packed under strict hygiene and safety standards",
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Versatility",
                subtitle: "Ideal for households, cafés, bakeries, restaurants, and diverse food industries"
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Long Shelf Life",
                subtitle: "Remains fresh over time and dissolves with ease"
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Multiple Functions",
                subtitle: "Perfect for sweetening, fermentation, preservation, and enhancing color"
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Trusted Sourcing",
                subtitle: "Carefully selected suppliers ensure premium-grade quality"
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Flexible Packaging",
                subtitle: "Offered in a wide range of sizes to suit personal and industrial requirements"
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Perfect Sweetness",
                subtitle: "Balances flavor beautifully, from a cup of tea to gourmet creations"
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
