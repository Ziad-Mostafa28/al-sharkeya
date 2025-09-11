import React, { useState } from 'react'
import styles from './RecipesItems.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RecipesItems() {

    const {data , loading} = useSelector((state) => state.recipe);
    console.log(data?.data.recipes);


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(data?.data.recipes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data?.data.recipes.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

 
    const lang = useSelector((state) => state.lang.lang);
    const isArabic = lang === 'ar';
    if (loading || !data?.data.recipes) return null;


    return (
        <section className={`${styles.NewsDataSections}`}>
            <div className={`${styles.container}`}>
                <h3 className={`${styles.title} mt-5 mb-3`}>Recipes</h3>

                {currentItems.map((member) => (
                    <div className={`${styles.bigcard}`} key={member.id}>
                        <div className={`${styles.image_box}`}>
                            <img src={member.image} alt={member.name} />
                        </div>

                        <div className={`${styles.data_box}`}>
                            <h3 className={`${styles.title}`}>{member.name}</h3>
                            <span className={`${styles.Subtitle}`}>{member.time}</span>

                            <p className={`${styles.desc}`}
                              dangerouslySetInnerHTML={{ __html: member.desc }}
                            ></p>

                            <button
                                className={styles.readmore}

                            >
                                <Link to={`/${lang}/recipe-details/${member.id}`} className={styles.readmoreLink}>
                                  {isArabic ? 'اقرأ أكثر ' : 'Read More'}

                                </Link>
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
    )
}
