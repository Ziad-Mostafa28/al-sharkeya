import React from "react";
import styles from "./CardBox.module.css";

export default function CardBox({ data }) {
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
