import React from 'react'
import styles from "./Sustainability.module.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Sustainability() {
     const { data, loading } = useSelector((state) => state.sustainability); 
    if (loading || !data?.data.main) return null;
    const  main = data?.data?.main;
    const {image,second_section_title,second_section_sub_title,second_section_desc,report}=main
    return (
        <section className={styles.cardbox}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2>{second_section_title}</h2>
                        <p className={styles.topdesc}>{second_section_sub_title}</p>
                        {/* <p>At Al Sharkeya Sugar Manufacturing we believe that sustainable success goes hand-in-hand with responsible business practices. Our 2024 Annual Report marks a significant milestone as our  <span>#first comprehensive Sustainability Report#</span>, offering a transparent and insightful overview of how we integrate environmental, social, and governance principles into our operations. We are committed to creating long-term value not only for our shareholders but also for the communities we serve and the planet we all share.</p> */}
                        <div
                        dangerouslySetInnerHTML={{__html:second_section_desc}}
                        ></div>

                        {report !== null && <Link to="#"><img src="/img/responsibilities/mdi_download.png" alt="" />Download Report</Link>} 
                    </div>
                    <div className="col-12 col-md-4">
                        <img className={styles.bannerImage} src={image} alt="cardbox" />
                    </div>
                </div>
            </div>
        </section>
    );
}
