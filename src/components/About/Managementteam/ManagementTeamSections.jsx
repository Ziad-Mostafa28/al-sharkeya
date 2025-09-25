import React from "react";
import styles from "./ManagementTeamSections.module.css";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ManagementTeamSections() {
    const { data, loading } = useSelector((state) => state.managementTeam);

    if (loading || !data) return null;
    const members = data?.data?.members || [];

    return (
        <section className={`${styles.ManagementTeamSections} py-5`}>
            <div className="container">
                <div className="row">
                    {members.map((person, index) => (
                        <div className="col-12 col-md-4" key={person.id || index}>
                            <div className={styles.peoplebox}>
                                <div className={styles.image}>
                                    <img src={person.image} alt={person.name} />
                                    <a
                                        href={person.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.linkedinIcon}
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <div className={styles.shadow}></div>
                                </div>
                                <div className={styles.desc}>
                                    <h2 className={styles.title}>{person.name}</h2>
                                    <span className={styles.subtitle}>{person.job_title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
