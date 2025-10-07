import React from 'react';
import styles from "./OurMission.module.css";
import { useSelector } from 'react-redux';

export default function OurMission() {

     const { data, loading} = useSelector((state) => state.aboutStrategy);
    if (loading || !data) return null;

  const mission = data?.data?.mission_section|| [];


    // const data = {
    //     description: "It plans to achieve this by",
    //     items: [
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "Building a factory with the latest technology available using the latest means to produce the highest quality white sugar that meets international standards."
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "Leveraging the strength of its partners, whose collective experience offers Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E a unique insight into sugar manufacturing, agriculture and access to trade partners and retail customers, in addition to the sourcing of raw materials."
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "Further expanding its growth potential by mechanizing beet cultivation and adopting new applications."
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "Fully capitalizing on the facility's geographic location, which offers an ideal temperate climate, access to fresh-water resources and a well-developed support infrastructure that includes easy access to transportation arteries and utilities as well as proximity to logistical and export hubs of the Suez Canal and Mediterranean Sea."
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "Developing access to regional and international markets."
    //         }
    //     ]
    // };
    return (
        <section className={styles.OurMission}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h2>Our Mission</h2>
                        {mission?.main?.mission_desc && <p className={styles.desc}
                        dangerouslySetInnerHTML={{__html:mission.main.mission_desc}}
                        
                        ></p>}
                    </div>
                    <div className="col-12 col-md-9">
                        <div className={styles.List}>
                            <ul>
                                {mission?.missions?.map((item, index) => (
                                    <li key={index} className="d-flex align-items-start gap-3">
                                        <img src={'/img/aboutus/icon.png'} alt={`icon-${index}`} />
                                        <p
                                        dangerouslySetInnerHTML={{__html:item.desc}}
                                        ></p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
