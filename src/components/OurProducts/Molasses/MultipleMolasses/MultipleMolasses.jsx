import React from 'react'
import styles from "./MultipleMolasses.module.css"

export default function MultipleMolasses() {


        const missionData = {
        title: "Multiple Uses of Molasses",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                text: "Building a factory with the latest technology available using the latest means to produce the highest quality white sugar that meets international standards."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Leveraging the strength of its partners, whose collective experience offers Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E a unique insight into sugar manufacturing, agriculture and access to trade partners and retail customers, in addition to the sourcing of raw materials."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Further expanding its growth potential by mechanizing beet cultivation and adopting new applications."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Fully capitalizing on the facility's geographic location, which offers an ideal temperate climate, access to fresh-water resources and a well-developed support infrastructure that includes easy access to transportation arteries and utilities as well as proximity to logistical and export hubs of the Suez Canal and Mediterranean Sea."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Developing access to regional and international markets."
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
                            {missionData.description && <p className={styles.desc}>{missionData.description}</p>}
                        </div>
                        <div className="col-12 col-md-9">
                            <div className={styles.List}>
                                <ul>
                                    {missionData.items?.map((item, index) => (
                                        <li key={index} className="d-flex align-items-start gap-3">
                                            <img src={item.icon} alt={`icon-${index}`} />
                                            <p>{item.text}</p>
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
