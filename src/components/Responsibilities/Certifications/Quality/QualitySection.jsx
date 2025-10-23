import React from 'react'
import styles from "./QualitySection.module.css";
import { useSelector } from 'react-redux';

export default function QualitySection() {
    const { data, loading } = useSelector((state) => state.certifications);

    if (loading || !data?.data?.main) return null;


    const main = data?.data?.main;



    // const data = {
    //     title: "Quality & Safety Certifications",
    //     description: "",
    //     items: [
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "ISO 9001:2015 for quality management"
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "BRCGS V9, ISO 22000, and FSSC 22000 for food safety."
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "ISO 45001:2018 for occupational health and safety"
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "ISO 14001:2015 for environmental management"
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "Halal certification for Sharia compliance"
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "NFSA for food safe and healthy"
    //         },
    //         {
    //             icon: "/img/aboutus/icon.png",
    //             text: "ISO 17025 for lab accreditation"
    //         }
    //     ],
    //     desc1: "As part of its pursuit of leadership in the sugar industry, Al Sharkeya Sugar applies the latest international quality and safety standards. ",
    //     desc2: "The company holds several key certifications:",
    //     desc3: "The company is the first beet sugar factory on the Egyptian Food Safety Authority's whitelist, confirming the safety and quality of its products.",
    //     desc4: "Additionally, Al Sharkeya Laboratory is internationally accredited with ISO/IEC 17025:2017 for white sugar analysis, ensuring accurate and reliable testing",
    // };

    
    return (

        // <section className={styles.QualitySection}>
        //     <div className={styles.container}>
        //         <div className="row">
        //             <div className="col-12 col-md-3">
        //                 <h2>{data.title}</h2>
        //                 {data.description && <p className={styles.desc}>{data.description}</p>}
        //             </div>
        //             <div className="col-12 col-md-9">
        //                 <div className={styles.List}>
        //                     <p className={styles.tob_desc}>
        //                         {data.desc1}
        //                     </p>
        //                        <p className={styles.tob_desc}>
        //                         {data.desc2}
        //                     </p>
        //                     <ul>
        //                         {data.items?.map((item, index) => (
        //                             <li key={index} className="d-flex align-items-start gap-3 mt-4">
        //                                 <img src={item.icon} alt={`icon-${index}`} />
        //                                 <p>{item.text}</p>
        //                             </li>
        //                         ))}
        //                     </ul>
        //                     <p className={styles.tob_desc}>
        //                         {data.desc3}
        //                     </p>
        //                     <p className={styles.tob_desc}>
        //                         {data.desc4}
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>


         <section className={styles.QualitySection}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h2>{main.global_mission_title}</h2>
                    </div>

                    <div className="col-12 col-md-9">
                        <div 
                            className={styles.List}
                            dangerouslySetInnerHTML={{ __html: main.quality_and_safety_desc }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>

    );
}
