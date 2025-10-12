import React from 'react'
import styles from "./SustainabilityBox.module.css";

export default function SustainabilityBox() {

    const boxes = [
        { img: '/img/responsibilities/Global1.png', text: 'Promoting responsible material use maximizing recycling, and optimizing industrial waste streams', color: '#F6E6D7' },
        { img: '/img/responsibilities/Global2.png', text: 'Implementing efficient irrigation systems and wastewater treatment practices', color: '#C78E50' },
        { img: '/img/responsibilities/Global3.png', text: 'Innovating industrial processes to enhance waste reduction and resource efficiency', color: '#00308F' },
        { img: '/img/responsibilities/Global4.png', text: 'Promoting responsible material use, maximizing recycling, and optimizing industrial waste streams', color: '#336AD9' },
        { img: '/img/responsibilities/Global5.png', text: 'Reducing emissions through waste-to-energy strategies and improved agricultural waste management', color: '#7CA429' },
        { img: '/img/responsibilities/Global6.png', text: 'Conserving natural resources by minimizing landfill waste and promoting biodiversity', color: '#035034' },
    ];

    return (
        <section className={styles.SustainabilityBox}>
            <div className={`${styles.container}`}>
                <h2>Global-Mission: Meeting the SDGs</h2>

                <div className="row gy-4 mt-5 justify-content-center">
                    {boxes.map((box, index) => (
                        <div
                            key={index}
                            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center"
                        >
                            <div
                                className={styles.card}
                                style={{ '--hover-color': box.color }}
                            >
                                <img src={box.img} alt={box.text} />
                                <div className={styles.overlay}>
                                    <span>{box.text}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
