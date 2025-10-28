import React from 'react'
import styles from "./OurVision.module.css";
import { useSelector } from 'react-redux';

export default function OurVision() {
     const { data,loading} = useSelector((state) => state.aboutStrategy);
    if (loading || !data) return null;

  const desc = data?.data?.vision_section?.vision_desc|| [];
    const image = data?.data?.vision_section?.vision_image|| [];

    return (
        <section className={styles.cardbox2}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2 className='mb-4'>Our Vision</h2>
                        <div className={styles.secondSectionDesc2}
                        dangerouslySetInnerHTML={{__html:desc}}
                        ></div>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={ image} alt="cardbox" />
                    </div>
                </div>
            </div>
        </section>
    )
}
