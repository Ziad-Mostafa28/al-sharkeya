import React from 'react'
import styles from "./SustainabilityBox.module.css";
import { useSelector } from 'react-redux';

export default function SustainabilityBox() {


     const { data, loading } = useSelector((state) => state.sustainability); 
        if (loading || !data?.data.sustainability_lists) return null;
        const  sustainability_mission_cards = data?.data?.sustainability_mission_cards;

  const lang = useSelector((state) => state.lang.lang);
  const isArabic= lang === 'ar';  

    

    return (
      <section className={styles.SustainabilityBox}>
  <div className={styles.container}>
    <h2> {isArabic?'أهداف التنمية المستدامة':'Sustainable Development Goals'} </h2>

    <div className="row gy-4 mt-5 justify-content-center">
      { sustainability_mission_cards.map((box, index) => (
        <div
          key={index}
          className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-3 d-flex justify-content-center"
        >
          <div
            className={styles.card}
            style={{ '--hover-color': box.hover_color }}
          >
            <img src={box.image} alt={box.text} />
            <div className={styles.overlay}>
              {/* <span>{box.desc}</span> */}
              <div
              dangerouslySetInnerHTML={{ __html:box.desc }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    );
}
