import React from "react";
import styles from "./OurShareholdersSection.module.css";

export default function OurShareholdersSection() {
    const shareholders = [
        {
            img: "/img/aboutus/logo1.png",
            title: "Islamic Corporation for the Development of the Private Sector",
            paragraphs: [
                "The Islamic Corporation for the Development of the Private Sector (ICD) is a multilateral organization affiliated with the Islamic Development Bank Group (IDB).",
                "Its shareholders consist of the IDB itself in addition to 51 member countries and five public financial institutions.",
                "The ICD's headquarters are based in Jeddah, Saudi Arabia, and were established by the IDB Board of Governors during its 24th annual meeting in Jeddah in November 1999.",
            ],
        },
        {
            img: "/img/aboutus/logo2.png",
            title: "Arab Fund for Economic and Social Development",
            paragraphs: [
                "The Arab Fund for Economic and Social Development (the Arab Fund, or AFESD). based in Kuwait, is a regional Arab financial institution focused on funding economic and social development by financing public sector and private Investment projects, providing grants and lending Its expertise.",
                "The Arab Fund's activities are characterized by a number of important aspects that make it a model of cooperation and Arab economic Integration, and a reflection of outstanding joint Arab action.",
            ],
        },
        {
            img: "/img/aboutus/logo3.png",
            title: "AI Nouran Multi trading Corporation",
            paragraphs: [
                "Founded in 1985, AI Nouran Multi trading (ANM) operates approximately one third of Egypt's sugar Imports.",
                "Its main activities include trading local or imported sugar.",
            ],
        },
        {
            img: "/img/aboutus/logo4.png",
            title: "Egyptian Sugar and Integrated Industries",
            paragraphs: [
                "The Egyptian Sugar and Integrated Industries Company (ESIIC) was established in 1868 and incorporated as a joint stock company in 1956 as a subsidiary of the Egyptian Holding Co. for Food Industries. The company operates and owns plants in 17 locations and produces all types of granulated sugar, molasses, honey, industrial alcohol, vinegar, acetic acid, organic solvents, adhesives and other Items.",
            ],
        },
        {
            img: "/img/aboutus/logo5.png",
            title: "Mr. Sadek El Sewedy",
            paragraphs: [
                "Mr. Sadek A. EI-Sewedy  Is a Chairman at Elsewedy Electric Co. Mr. EI-Sewedy also served on the board at Arabia  Investments Development Financial Investments Holding.",
            ],
        },
    ];

    return (
        <section className={`${styles.OurShareholdersSection} py-5`}>
            <div className={`${styles.container}`}>
                {shareholders.map((item, index) => (
                    <div className="row mb-5" key={index}>
                        <div className="col-12 col-md-2">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="col-12 col-md-10">
                            <div className={`${styles.box}`}>
                                <h2>{item.title}</h2>
                                {item.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
