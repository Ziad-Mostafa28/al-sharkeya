import React from "react";
import styles from "./CardBox.module.css";

export default function CardBox() {

    const data = {
        image: "/img/aboutus/cardbox2.png",
        paragraphs: [
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E 's strategy is fundamentally geared towards meeting market needs by reduction the wide disparity between supply and demand, both domestically and regionally.",
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E aims to acquire this escalating aspect of this growing market, whose potential is not limited to Egypt only.",
            "With favorable free-trade agreements between Egypt, North Africa, East Africa and Arab countries already in place to support the export of white sugar and its byproducts, the export potential for Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E remains very high.",
            "Further advantages include wide governmental support as sugar is a staple in the food production industry, in addition to the availability of land for growth in the cultivation of sugar beets, which require relatively minimal water consumption.",
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E plans to leverage its competitive advantages with these opportunities to boost the production capacity of the local and regional markets while attempting to supply net importers, and it plans to do this in a sustainable manner which ensures the continued well-being of the local community.",
        ]
    };
    return (
        <section className={styles.cardbox}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        {data.paragraphs?.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={data.image} alt="cardbox" />
                    </div>
                </div>
            </div>
        </section>
    );
}
