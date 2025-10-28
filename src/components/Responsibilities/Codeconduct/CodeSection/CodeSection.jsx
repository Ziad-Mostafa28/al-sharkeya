import React from 'react'
import styles from "./CodeSection.module.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CodeSection() {
     const { data, loading } = useSelector((state) => state.codeOfConduct); 
    if (loading || !data?.data.main) return null;
    return (
        <section className={styles.cardbox}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8"  >
                        <h2>{data?.data?.main?.second_section_title}</h2>
                        <p className={styles.topdesc}>{data?.data?.main?.second_section_sub_title}</p>
                        <div
                        className={styles.secondSectionDesc} 
                        dangerouslySetInnerHTML={{ __html:data?.data?.main?.second_section_desc }}
                        ></div>

                    </div>
                    <div className="col-12 col-md-4">
                        <img className={styles.bannerImage} src={data?.data?.main?.image} alt="cardbox" />
                    </div>
                </div>
            </div>
        </section>
    )
}
