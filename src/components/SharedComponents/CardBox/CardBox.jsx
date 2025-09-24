import React from "react";
import styles from "./CardBox.module.css";
import { useSelector } from "react-redux";

export default function CardBox() {

    const { data, loading } = useSelector((state) => state.aboutWhoWeAre);
    const lang = useSelector((state) => state.lang.lang);


    if (loading || !data) return null;

    const whoWeAre = data?.data?.main;


    return (
        <section className={styles.cardbox}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div
                            dangerouslySetInnerHTML={{ __html: whoWeAre?.who_we_are_desc }}
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <img
                            src={whoWeAre?.who_we_are_image}
                            alt="who-we-are"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
