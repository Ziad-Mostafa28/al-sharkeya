import React from 'react'
import styles from "./ManagementTeamSections.module.css";
import { FaLinkedin } from "react-icons/fa"; // أيقونة لينكدان

export default function ManagementTeamSections() {
    const team = [
        {
            img: "/img/aboutus/pe1.png",
            name: "Dr. Shehab Marzban",
            role: "Chairman",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe2.png",
            name: "Eng. Wael Azmy",
            role: "Manufacturing Director",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe3.png",
            name: "Ahmed Fouad Hussein",
            role: "Chief Financial Officer",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe4.png",
            name: "Eng. Mamdouh Baioumy",
            role: "Agriculture Director",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe5.png",
            name: "Ghada Anwar",
            role: "Chief Human Capital Officer",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe6.png",
            name: "Doaa Taha",
            role: "Sales Director",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe7.png",
            name: " Eng. Malek Fawaz",
            role: "Digital Transformation Director",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe8.png",
            name: "Eng. Maher Abou Youssef",
            role: "QHSE Director",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe9.png",
            name: "Ahmed Saeid",
            role: "Internal Audit Director ",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe10.png",
            name: "Waleed Abdel aziz ",
            role: "Acting as Supply Chain Director",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe11.png",
            name: "Hesham Elgebaly",
            role: "Security Dept. Manager",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe12.png",
            name: "Ahmed Reda",
            role: "Sustainability & Business Development Manager",
            linkedin: "#"
        },
        {
            img: "/img/aboutus/pe13.png",
            name: "Ahmed Fathy",
            role: "Commercial Manager",
            linkedin: "#"
        },
    ];

    return (
        <section className={`${styles.ManagementTeamSections} py-5`}>
            <div className="container">
                <div className="row">
                    {team.map((person, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <div className={styles.peoplebox}>
                                <div className={styles.image}>
                                    <img src={person.img} alt={person.name} />
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
                                    <span className={styles.subtitle}>{person.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
