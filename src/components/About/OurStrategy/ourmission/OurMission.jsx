import React from 'react';
import styles from "./OurMission.module.css";

export default function OurMission({ data }) {

    return (
        <section className={styles.OurMission}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h2>{data.title}</h2>
                        {data.description && <p className={styles.desc}>{data.description}</p>}
                    </div>
                    <div className="col-12 col-md-9">
                        <div className={styles.List}>
                            <ul>
                                {data.items?.map((item, index) => (
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
    );
}
