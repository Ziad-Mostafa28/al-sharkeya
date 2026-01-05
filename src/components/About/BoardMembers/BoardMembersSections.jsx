import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./BoardMembersSections.module.css";

export default function BoardMembersSections() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const { data, loading } = useSelector((state) => state.aboutBoardMembers);
        const lang = useSelector((state) => state.lang.lang);

    const isArabic = lang === 'ar';

    if (loading || !data) return null;

    const boardMembers = data?.data?.members || [];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };



    return (
        <section className={`${styles.BoardMembersSections} py-5`}>
            <div className={`${styles.container}`}>
                {boardMembers.map((member, index) => {
                    const fullText = `${member.desc || ""}`.trim();

                    return (
                        <div className={`${styles.bigcard}`} key={index}>
                            <div className={`${styles.image_box}`}>
                                <img src={member.image} alt={member.name} />
                            </div>

                            <div className={`${styles.data_box}`}>
                                <h3 className={`${styles.title}`}>{member.name}</h3>
                                <span className={`${styles.Subtitle}`}>{member.job_title}</span>

                                <p
                                    className={`${styles.desc} ${expandedIndex === index ? styles.expanded : styles.clamped
                                        }`}
                                    dangerouslySetInnerHTML={{ __html: fullText }}
                                />

                                {fullText.length > 300 && (
                                    <button
                                        className={styles.readmore}
                                        onClick={() => toggleExpand(index)}
                                    >
                                        {expandedIndex === index ? isArabic?' اقرأ اقل' : 'Read less' : isArabic?'اقرأ المزيد' : 'Read more'}


                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
