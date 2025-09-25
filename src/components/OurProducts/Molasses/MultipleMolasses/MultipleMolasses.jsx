import React from 'react'
import styles from "./MultipleMolasses.module.css"

export default function MultipleMolasses() {


    const missionData = {
        title: "Uses of Molasses",
        description: "",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                title: "Food & Beverage",
                texts: [
                    "Sweetener in baking (cookies, bread, cakes)",
                    "Flavoring in sauces, marinades, and glazes",
                    "Ingredient in traditional sweets and candies",
                    "Production of rum and other fermented beverages",
                ]
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Animal Nutrition",
                // subtitle: "Molasses is a perfect medium for the growth of yeast and bacteria due to its sugar and nutrient content. It is widely used in the production of:",

                texts: [
                    "Energy-rich supplement in livestock feed",
                    "Binder in pelletized feed",
                    "Improves palatability of roughage-based diets",
                ]
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Agricultural Uses",

                texts: [
                    "Soil conditioner and microbial growth enhancer",
                    "Component in organic fertilizers and composting",
                ]
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Industrial Applications",
                subtitle: "Molasses serves as:",

                texts: [
                    "Substrate in ethanol and biofuel production",
                    "Raw material for yeast and citric acid fermentation",
                    "Used in chemical industries (e.g., calcium lignosulfonate)",
                ]
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Other Traditional Uses",

                texts: [
                    "Natural remedy in folk medicine (iron-rich tonic)",
                    "Ingredient in brewing and distilling",
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
                                                    <p
                                                        key={i}
                                                        className={styles.textup}
                                                        dangerouslySetInnerHTML={{ __html: `<span>${line}</span>` }}
                                                    ></p>


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
