// import React from 'react'
// import styles from "./SectionAbout.module.css";
// import CountUp from 'react-countup';
// import { Link } from 'react-router-dom';
// import VideoSection from '../video/VideoSection';

// export default function SectionAbout() {


//     return (
//         <>
//             <section >
//                 <div className={`${styles.about}`}>
//                     <div className="row">
//                         <div className="col-12 col-md-6 col-lg-7 col-xl-5 order-1 order-md-2">
//                             <div className={styles.image_box}>
//                                 <img className={styles.first_image} src="/img/homepage/about1.png" alt="" />
//                                 <img className={styles.second_image} src="/img/homepage/about2.png" alt="" />
//                             </div>
//                         </div>
//                         <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
//                             <div className='h-100  d-flex  flex-column justify-content-center'>
//                                 <h2 className={`${styles.title}`}>About Us</h2>
//                                 <p className={`${styles.desc}`}>
//                                     Al Sharkeya Sugar Manufacturing specializes in sugar beet cultivating and harvesting, producing premium-quality white sugar using the latest technologies and strict good manufacturing practices
//                                 </p>
//                                 <div className={`${styles.numbox}`}>
//                                     <div className={styles.smallbox}>
//                                         <div className={styles.numberBox}>
//                                             <span className={styles.plus}>+</span>
//                                             <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce />
//                                         </div>
//                                         <div className={styles.descc}>
//                                             Years of
//                                             <br />
//                                             Experience
//                                         </div>
//                                     </div>

//                                     <div className={styles.smallbox}>
//                             <div className={styles.numberBox}>
//                                 <CountUp end={400} duration={2} enableScrollSpy scrollSpyOnce/>
//                                 <span className={styles.plus}>+K</span>

//                             </div>
//                             <div className={styles.descc}>
//                                 Tons Of White 
//                                 <br />
//                                 Sugar Annually
//                             </div>
//                             </div>
//                                 </div>
//                                 <div className={`w-100 d-flex justify-content-center justify-content-lg-end`}>
//                                     <Link to={'about-us/who-we-are'}>
//                                         <button> Read More</button>

//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* <div className="col-12 col-md-6 col-lg-7 col-xl-5">
//                     <div className={`${styles.image_box}`}>
//                         <img className='w-100' src="/img/homepage/about1.png" alt="" />
//                         <img className={`${styles.second_image}`} src="/img/homepage/about2.png" alt="" />
//                     </div>
//                 </div> */}
//                     </div>
//                 </div>
//             </section>

//             <VideoSection />
//         </>
//     )
// }






import React, { Suspense } from 'react'
import styles from "./SectionAbout.module.css";
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VideoSection from '../video/VideoSection';
import { useSelector } from 'react-redux';

export default function SectionAbout() {
   const { data } = useSelector((state) => state.homeWithOrdering);
  const aboutList =
    data?.data?.sections?.find((section) => section.about)?.about?.list;
    const VideoSection = React.lazy(() => import("../video/VideoSection"));


  return (
    <>
      <section>
        <div className={styles.about}>
          <div className="row">
            {/* Left (text) side */}
            <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
              <div className="h-100 d-flex flex-column justify-content-center">
                {/* Title */}
                <h2 className={styles.title}>{aboutList?.home_title}</h2>

                {/* Description */}
                <div
                  className={styles.desc}
                  dangerouslySetInnerHTML={{
                    __html: aboutList?.home_desc || "",
                  }}
                ></div>

                {/* Numbers Section */}
                <div className={styles.numbox}>
                  {/* Years of Experience */}
                  <div className={styles.smallbox}>
                    <div className={styles.numberBox}>
                      <span className={styles.plus}>
                        {aboutList?.years_of_experience?.charAt(0) === "+"
                          ? "+"
                          : ""}
                      </span>
                      <CountUp
                        end={
                          parseInt(
                            aboutList?.years_of_experience?.replace("+", "") ||
                              0
                          )
                        }
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </div>
                    <div className={styles.descc}>
                      Years of
                      <br />
                      Experience
                    </div>
                  </div>

                  {/* Tons per Year */}
                  <div className={styles.smallbox}>
                    <div className={styles.numberBox}>
                       <span className={styles.plus}>
                        {aboutList?.anually_tons?.includes("+") ? "+" : ""}
                      </span>
                      <CountUp
                        end={
                          parseInt(
                            aboutList?.anually_tons?.replace("+", "") || 0
                          )
                        }
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                     
                      <span className={styles.k}>K</span>
                    </div>
                    <div className={styles.descc}>
                      Tons Of White
                      <br />
                      Sugar Annually
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="w-100 d-flex justify-content-center justify-content-lg-end">
                  <Link to={"/about-us/who-we-are"}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right (images) side */}
            <div className="col-12 col-md-6 col-lg-7 col-xl-5 order-1 order-md-2">
              <div className={styles.image_box}>
                <img
                  className={styles.first_image}
                  src={aboutList?.home_first_image}
                  alt="about-1"
                  loading="lazy"
                />
                <img
                  className={styles.second_image}
                  src={aboutList?.home_second_image}
                  alt="about-2"
                   loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <Suspense fallback={<div>Loading video...</div>}>
        <VideoSection videoUrl={aboutList?.home_video} />
      </Suspense>
    </>
  );
}
