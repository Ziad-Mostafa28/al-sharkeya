import React, { useState } from 'react';
import styles from "./NewsData.module.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NewsData() {
    const { data, loading } = useSelector((state) => state.news);
    const news = data?.data?.news || [];
    const lang = useSelector((state) => state.lang.lang);
    const isArabic = lang === 'ar';


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = news.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (loading || !news.length) return null;

    return (
        <section className={`${styles.NewsDataSections} py-5`}>
            <div className={styles.container}>
                <h3 className={`${styles.title} mt-5 mb-3`}>Latest news</h3>

                {currentItems.map((item) => (
                    <div className={styles.bigcard} key={item.id}>
                        <div className={styles.image_box}>
                            <img src={item.image} alt={item.title} />
                        </div>

                        <div className={styles.data_box}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <span className={styles.Subtitle}>{item.date}</span>

                            <p
                                className={styles.desc}
                                dangerouslySetInnerHTML={{ __html: item.desc }}
                            ></p>

                            <button className={styles.readmore}>
                                <Link to={`/${lang}/news-details/${item.id}`}>{isArabic ? 'اقرأ أكثر ' : 'Read More'}</Link>
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
