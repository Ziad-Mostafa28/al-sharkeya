import React from 'react'
import styles from "./Activities.module.css";
import { useSelector } from 'react-redux';

export default function Activities() {
    const { data, loading } = useSelector((state) => state.aboutWhoWeAre);
    const lang = useSelector((state) => state.lang.lang);

    if (loading || !data) return null;

    const activities = data?.data?.acitivities || [];

    return (
        <section className={styles.activities}>
            <h2>Our Activities</h2>

            <div className="container">
                <div className="row">
                    {activities.map((activity) => (
                        <div className="col-12 col-sm-4" key={activity.id}>
                            <div className="d-flex flex-column align-items-center gap-4 mt-4">
                                <img src={activity.image} alt={activity.name} />
                                <p>{activity.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
