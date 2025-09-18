import React from "react";
import styles from "./CardBox.module.css";

export default function CardBox() {

    const data = {
        image: "/img/aboutus/cardbox.png",
        paragraphs: [
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E. has distinguished expertise in the field of breeding, harvesting of sugar beet and manufactures and produces a high-quality white sugar by latest technology methodology applying good manufacture practice.",
            "Founded in 2014 to address the expanding demand for high quality of white sugar in Egypt and the MENA region.",
            "The plant established a total area of 420 Feddan.",
            "Its core purpose is the combination of agricultural innovation and sugar industry expertise, through our unique strategic location in northeastern Egypt in Al Sharkeya governorate - Husseinia precinct.",]
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
