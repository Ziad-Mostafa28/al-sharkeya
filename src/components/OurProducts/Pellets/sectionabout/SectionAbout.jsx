import React from 'react'
import styles from "./SectionAbout.module.css";
import CountUp from 'react-countup';

export default function SectionAbout() {
    return (
        <>
            <section>
                <div className={`${styles.about}`}>
                    <div className="container">
                        <div className="row">
                            {/* <h3 className={`${styles.title}`} >Technical Specifications of Our Pellets</h3> */}

                            {/* <div className="col-12 col-md-6 col-sm-12 col-lg-8">

                                <div className={`${styles.leftSide}`}>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            8 <span className={styles.plus}>-</span>10

                                            <span className={styles.unit}>mm</span>
                                        </div>
                                        <div className={styles.descc}>
                                            <span className={styles.text}>Diameter</span>
                                            <span className={styles.bigDash}>   </span>
                                        </div>
                                    </div>

                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            10 <span className={styles.plus}>-</span>12
                                            <span className={styles.unit}>%</span>
                                        </div>
                                        <div className={styles.descc}>
                                            Humidity
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-12 col-md-12 col-sm-12 col-lg-12">
                                <div className={`${styles.rightSide}`}>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            8 <span className={styles.plus}>-</span>10

                                            <span className={styles.unit}>mm</span>
                                        </div>
                                        <div className={styles.descc}>
                                            <span className={styles.text}>Diameter</span>
                                            <span className={styles.bigDash}>   </span>
                                        </div>
                                    </div>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            10 <span className={styles.plus}>-</span>12
                                            <span className={styles.unit}>%</span>
                                        </div>
                                        <div className={styles.descc}>
                                            Humidity
                                        </div>
                                    </div>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            9
                                            <span className={styles.unit}>%</span>
                                        </div>
                                        <div className={styles.descc}>
                                            Protein <br />
                                            Content
                                        </div>
                                    </div>
                                    <div className={styles.smallbox}>
                                        <div className={styles.numberBox}>
                                            7
                                            <span className={styles.unit}>%</span>
                                        </div>
                                        <div className={styles.descc}>
                                            Sugar <br />
                                            Content
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}


// import React from 'react';
// import styles from "./SectionAbout.module.css";

// export default function SectionAbout({ data }) {
//   if (!data || !data.list) return null;

//   return (
//     <section>
//       <div className={styles.about}>
//         <div className="container">
//           <div className="row">
//             {data.list.map((item) => (
//               <div key={item.id} className="col-12 col-md-3 col-sm-6">
//                 <div className={styles.smallbox}>
//                   <div className={styles.numberBox}>
//                     {item.value}
//                     {item.measurement_unit && <span className={styles.unit}>{item.measurement_unit}</span>}
//                   </div>
//                   <div className={styles.descc}>
//                     {item.description}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
