import React from 'react'
import styles from "./MultipleMolasses.module.css"

export default function MultipleMolasses() {


    const missionData = {
        title: "Multiple Uses of Molasses",
        description: "",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                title: "Animal Feed",
                texts: [
                    "Energy Source: Molasses provides readily available energy for both ruminant and non-ruminant animals.",
                    "Palatability Enhancer: Its sweet taste makes feed more attractive.",
                    "Binding Agent: Used in pelleted feeds to reduce dust and enhance pellet integrity.",
                    "Pasture Additive: Sprayed on pastures or crop residues to improve nutritional value.",
                    "Mineral and Vitamin Carrier: Helps deliver minerals and vitamins to animal diets."
                ]
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Fattening Animals",
                subtitle: "Molasses is a perfect medium for the growth of yeast and bacteria due to its sugar and nutrient content. It is widely used in the production of:",

                texts: [
                    "Baker's yeast",
                    "Nutritional yeast",
                    "Binding Agent: Used in pelleted feeds to reduce dust and enhance pellet integrity.",
                    "Ethanol",
                ]
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Sheep and Goats",
                subtitle: "Molasses serves as:",

                texts: [
                    "A natural sweetener and coloring agent in products like baked goods and sauces.",
                    "An ingredient in alcoholic beverages such as rum.",
                ]
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Horses",

                texts: [
                    "Used as an organic soil amendment, enhancing soil fertility and microbial activity.",
                    "Sometimes included in liquid fertilizers to improve nutrient uptake by plants.",
                ]
            }
        ]
    };
    return (
        <>


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

        </>
    )
}
