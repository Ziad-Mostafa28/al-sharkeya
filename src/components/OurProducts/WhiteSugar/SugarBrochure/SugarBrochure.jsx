// import React from 'react'
// import styles from './SugarBrochure.module.css'

// export default function BrochureSugar({ data }) {

//  if(!data) return null;    
//     return (
//         <section className={`${styles.WhiteSugar}`}>
//             <div className={`container-fluid ${styles.customContainer}`}>
//                 <div className="row align-items-center">

//                     <div className={`col-md-6 p-0  ${styles.imageBlock}`}>
//                         <img
//                             src={data.image}
//                             alt="White sugar"
//                         />
//                     </div>
//                     <div className={`col-md-6 ${styles.textBlock}`}>
//                         {/* <p>
//                             White sugar, also known as refined sugar or granulated sugar, is a common sweetener
//                             made by extracting and purifying sucrose from sugar beet plants or sugarcane.
//                             It is typically white in color, fine in texture, and consists of nearly pure sucrose.
//                             White sugar is a versatile and essential ingredient found in kitchens and food
//                             production around the world.
//                             Known for its clean sweetness and ability to enhance
//                             flavor, texture, and color in recipes, white sugar is widely used in baking, beverages,desserts, and processed foods, we produce Pharma & Specialized Industrial Sugar Grade, as well as Commercial Sugar Grade. 
//                         </p> */}

//                         <div
//                             dangerouslySetInnerHTML={{ __html: data.description }}
//                         ></div>
//                         {data.file && (
//                             <a
//                                 href={data.file}
//                                 download
//                                 className={styles.downloadLink}
//                             >
//                                 <img
//                                 src="/img/our-products/white-sugar/download.svg"
//                                 alt="Download Icon"
//                                 className={styles.icon}
//                                 />
//                                 <span className={styles.downloadBrochure}>Download Brochure</span>
//                             </a>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }


import React from 'react'
import styles from './SugarBrochure.module.css'

export default function BrochureSugar() {

    return (
        <section className={`${styles.WhiteSugar}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
                <div className="row align-items-center">

                    <div className={`col-md-6 p-0  ${styles.imageBlock}`}>
                        <img
                            src='/img/our-products/white-sugar/image1.png'
                            alt="White sugar"
                        />
                    </div>
                    <div className={`col-md-6 ${styles.textBlock}`}>
                        <p>
                            White sugar, also known as refined sugar or granulated sugar, is a common sweetener
                            made by extracting and purifying sucrose from sugar beet plants or sugarcane.
                            It is typically white in color, fine in texture, and consists of nearly pure sucrose.
                            White sugar is a versatile and essential ingredient found in kitchens and food
                            production around the world.
                            Known for its clean sweetness and ability to enhance
                            flavor, texture, and color in recipes, white sugar is widely used in baking, beverages,desserts, and processed foods, we produce Pharma & Specialized Industrial Sugar Grade, as well as Commercial Sugar Grade. 
                        </p>

                        {/* <div
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        ></div> */}
                      
                            {/* <a
                                href={'#'}
                                download
                                className={styles.downloadLink}
                            >
                                <img
                                src="/img/our-products/white-sugar/download.svg"
                                alt="Download Icon"
                                className={styles.icon}
                                />
                                <span className={styles.downloadBrochure}>Download Brochure</span>
                            </a> */}
                    </div>
                </div>
            </div>
        </section>

    )
}
