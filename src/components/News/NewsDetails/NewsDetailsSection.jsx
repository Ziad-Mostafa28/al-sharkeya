import React, { useEffect } from 'react'
import styles from "./NewsDetailsSection.module.css";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearNewsDetails, fetchNewsDetails } from '../../../../store/slices/newDetails';
import LoadingOverlay from '../../../layouts/LoadingOverlay/LoadingOverlay';

export default function NewsDetailsSection() {


    const { id, lang } = useParams();
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.newsDetails);
    const isArabic = lang === 'ar';

    useEffect(() => {
        dispatch(fetchNewsDetails({ id, lang }));
        return () => {
            dispatch(clearNewsDetails());
        };
    }, [dispatch, id, lang]);

    if (loading) return <p><LoadingOverlay /></p>;
    if (!data?.data) return null;

    const newsDetails = data.data;



    return (
        <section className={styles.NewsDetailsSection}>
            <div className={`${styles.container}`}>
                <div className={`${styles.top_link}`}>
                    <Link to={`/${lang}/news`}><img src="/img/news/Vector.png" alt="" />
                        {isArabic ? 'الرجوع الي الاخبار' : 'Back to news'}
                    </Link>
                </div>

                <h2 className={`${styles.top_title}`}>{newsDetails.title}</h2>

                <p className={`${styles.yellow_desc}`}>{newsDetails.date}</p>

                <p className={`${styles.general_desc}`}
                    dangerouslySetInnerHTML={{ __html: newsDetails.desc }}
                ></p>

                <img className={`${styles.image_news}`} src={newsDetails.banner} alt="" />

                {/* <h3 className={`${styles.second_title} mt-4`}>Strategic Importance</h3>
                <p className={`${styles.general_desc}`}>The Sharkeya Sugar Factory plays a major role in boosting local production and reducing
                    dependence on sugar imports. It aligns with the national strategy to enhance food security,
                    support agricultural investment, create jobs, and increase the added value of Egyptian
                    crops—especially sugar beet, which is widely cultivated in the region.
                </p> */}

                {/* <h3 className={`${styles.second_title} mt-4`}>Presidential Remarks</h3>
                <p className={`${styles.general_desc}`}>During the visit, President El-Sisi praised the efforts of engineers, workers, and farmers,
                    emphasizing the importance of expanding sugar beet cultivation and using modern
                    irrigation methods to conserve water.
                </p>
                <p className={`${styles.general_desc}`}>
                    “We are not just building a factory — we are building a national model that links
                    production, employment, and national pride,” El-Sisi said.
                </p>

                <h3 className={`${styles.second_title} mt-4`}>Factory Capabilities</h3>
                <p className={`${styles.general_desc}`}>
                    The factory is equipped with advanced sugar extraction and refining technologies and has a
                    high production capacity designed to meet a significant portion of domestic demand. It also
                    features integrated environmental systems for waste recycling and sustainability.
                </p>
                <h3 className={`${styles.second_title} mt-4`}>Looking Forward</h3>
                <p className={`${styles.general_desc}`}>
                    President El-Sisi’s visit reflects the state’s growing commitment to agricultural-industrial
                    integration projects, particularly in the Delta and Upper Egypt. The Sharkeya Sugar Factory
                    stands as a model of public-private cooperation aiming at food self-sufficiency and
                    sustainable economic development.
                </p> */}
                <div className={`${styles.new_dev} mt-4`}

                    dangerouslySetInnerHTML={{ __html: newsDetails.details }}
                ></div>
            </div>
        </section>
    )
}
