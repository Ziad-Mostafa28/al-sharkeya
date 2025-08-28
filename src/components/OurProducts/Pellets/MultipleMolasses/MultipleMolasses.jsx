import React from 'react'
import styles from "./MultipleMolasses.module.css"

export default function MultipleMolasses() {


        const missionData = {
        title: "Beet Pulp Uses in Animal Nutrition",
        description: "Beet pulp is used in the diets of many animals",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                title: "Dairy Cows",
                text: "Enhances milk production and supports rumen health with slow-release energy."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Fattening Animals",
                text: "Boosts growth rates and feed efficiency."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Sheep and Goats",
                text: "Provides essential energy and fiber."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "Horses",
                text: "Especially when soaked, it offers digestible fiber and energy, ideal for horses with dental or digestive issues."
            },
            {
                icon: "/img/aboutus/icon.png",
                title: "High Palatability",
                text: " Well-accepted by animals, ensuring good feed intake."
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
                                                <p className={styles.textup}>{item.text}</p>
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
