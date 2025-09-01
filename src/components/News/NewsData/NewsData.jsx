import React, { useState } from 'react';
import styles from "./NewsData.module.css";

export default function NewsData() {

    const NewsData = [
        {
            id: 1,
            img: "/img/news/news1.png",
            name: "President Abdel Fattah El-Sisi Visits Sharkeya Sugar Factory to Support National Industry and Agricultural Development",
            role: "1 May 2023",
            shortDesc: `In a significant step toward enhancing Egypt’s agricultural and industrial sectors, President
                        Abdel Fattah El-Sisi paid an official visit to the Sharkeya Sugar Factory — one of the
                        country’s key agricultural manufacturing projects.`,
        },
        {
            id: 2,
            img: "/img/news/news2.png",
            name: "Visit of Dr.Hala El-Said Minister of Planning and Economic Develo-pment, and Dr. Ali El-Moselhi, Minister of Supply and Internal Trade.",
            role: "24 May 2024",
            shortDesc: ` Dr. Hala El-Said, Minister of Planning and Economic Development and Egypt Governor at the Islamic Development Bank; Dr. Ali Moselhi, Minister of Supply and Internal Trade; and Eng. Hani Salem Sonbol, Acting CEO of the Islamic Corporation for the Development of the Private Sector and CEO of the International Islamic Trade Finance Corporation, conducted an inspection tour of the Sharkeya Sugar Company’s  Al-Nouran factory in El-Salheya city, Sharkeya Governorate, Egypt. The visit included the presence of Dr. Mamdouh Ghorab, Gov.....`,
        },
        {
            id: 3,
            img: "/img/news/news3.png",
            name: "Launch of Beet Harvest Season and Commencement of Sugar Factory Operations.",
            role: "19 February 2025",
            shortDesc: `The Sharkeya Sugar Company has officially launched the beet harvest season and commenced factory operations at its production lines in New Salheya City, Sharkeya Governorate. This milestone reflects the company’s strong preparation for the new agricultural season and its commitment to boosting local sugar production.`,
        },
        {
            id: 4,
            img: "/img/news/news4.png",
            name: "Sharkeya Governor Witnesses Start of Beet Supply Season at Sharkeya Sugar Company",
            role: "23 February 2025",
            shortDesc: `Engineer Hazem El-Ashmouny, Governor of Sharkeya, witnessed the launch of the sugar beet supply season at the Sharkeya Sugar Company in New Salheya City, in the presence of executive officials and sector heads.`,
        },
        {
            id: 5,
            img: "/img/news/news1.png",
            name: "New Project Launched for Agricultural Support",
            role: "25 February 2025",
            shortDesc: `The company launched a new initiative to support farmers and expand sugar production across Egypt.`,
        },
        {
            id: 6,
            img: "/img/news/news2.png",
            name: "New Project Launched for Agricultural Support",
            role: "25 February 2025",
            shortDesc: `The company launched a new initiative to support farmers and expand sugar production across Egypt.`,
        },
        {
            id: 7,
            img: "/img/news/news3.png",
            name: "New Project Launched for Agricultural Support",
            role: "25 February 2025",
            shortDesc: `The company launched a new initiative to support farmers and expand sugar production across Egypt.`,
        },
        {
            id: 8,
            img: "/img/news/news3.png",
            name: "New Project Launched for Agricultural Support",
            role: "25 February 2025",
            shortDesc: `The company launched a new initiative to support farmers and expand sugar production across Egypt.`,
        },
        {
            id: 9,
            img: "/img/news/news3.png",
            name: "New Project Launched for Agricultural Support",
            role: "25 February 2025",
            shortDesc: `The company launched a new initiative to support farmers and expand sugar production across Egypt.`,
        },
    ];

    // === Pagination Logic ===
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(NewsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = NewsData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <section className={`${styles.NewsDataSections} py-5`}>
            <div className={`${styles.container}`}>
                <h3 className={`${styles.title} mt-5 mb-3`}>Latest news</h3>

                {currentItems.map((member) => (
                    <div className={`${styles.bigcard}`} key={member.id}>
                        <div className={`${styles.image_box}`}>
                            <img src={member.img} alt={member.name} />
                        </div>

                        <div className={`${styles.data_box}`}>
                            <h3 className={`${styles.title}`}>{member.name}</h3>
                            <span className={`${styles.Subtitle}`}>{member.role}</span>

                            <p className={`${styles.desc}`}>{member.shortDesc}</p>

                            <button
                                className={styles.readmore}

                            >
                                Read more
                            </button>
                        </div>
                    </div>
                ))}

                {/* === Pagination === */}
                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.arrow}
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.activePage : ""}`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={styles.arrow}
                        >
                            ›
                        </button>
                    </div>

                )}
            </div>
        </section>
    );
}
