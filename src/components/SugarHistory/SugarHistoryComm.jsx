// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import styles from "./SugarHistoryComm.module.css";
// import { useSelector } from "react-redux";

// function formatPeriodText(text) {
//   const specialWords = ["BCE", "CE", "S"];
//   return text.split(" ").map((word, index) => {
//     if (specialWords.includes(word)) {
//       return (
//         <span key={index} className={styles.subText}>
//           {word}
//         </span>
//       );
//     }
//     return word + " ";
//   });
// }

// export default function SugarHistoryComm() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperRef = useRef(null);
//   const [isEnd, setIsEnd] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = [
//     {
//       period: "~8000 BCE – 500 BCE",
//       title: "Origin of Sugarcane Cultivation",
//       text: [
//         "Sugarcane is first domesticated in New Guinea and later spreads to India and Southeast Asia.",
//         "Indians discover how to crystallize sugar from sugarcane juice — the earliest form of refined sugar.",
//       ],
//       background: "/img/sugarhistory/1.png",
//       image: "/img/sugarhistory/Rectangle1.png",
//     },
//     {
//       period: "~400 BCE – 600 CE",
//       title: "Sugar Spreads to the Middle East",
//       text: [
//         "Through trade and conquest, sugar technology spreads westward from India to Persia and the Arab world.",
//         "The word “sugar” derives from the Sanskrit “sharkara,” entering Arabic as “sukkar”.",
//       ],
//       background: "/img/sugarhistory/2.png",
//       image: "/img/sugarhistory/Rectangle2.png",
//     },
//     {
//       period: "641 CE – 1000 S",
//       title: "Sugar Introduced in Egypt under Islamic Rule",
//       text: [
//         "With the Arab conquest of Egypt, sugarcane is introduced and cultivated in the Nile Delta and Upper Egypt.",
//         "Egypt becomes a notable sugar-producing region during the Islamic Golden Age, exporting to the Mediterranean.",
//       ],
//       background: "/img/sugarhistory/3.png",
//       image: "/img/sugarhistory/Rectangle3.png",
//     },
//     {
//       period: "1100 S – 1500 S",
//       title: "Sugar in Europe",
//       text: [
//         "Crusaders bring sugar to Europe from the Middle East, calling it “white gold”.",
//         "Sugar remains a luxury item used only by the elite.",
//       ],
//       background: "/img/sugarhistory/4.png",
//       image: "/img/sugarhistory/Rectangle4.png",
//     },
//     {
//       period: "1500 CE – 1800 S",
//       title: "Colonial Expansion & Sugar Plantations",
//       text: [
//         "European powers establish large sugar plantations in the Caribbean, South America, and Indian Ocean islands.",
//         "Sugar becomes a global commodity, driving colonial economies and unfortunately linked to the transatlantic slave trade.",
//       ],
//       background: "/img/sugarhistory/5.png",
//       image: "/img/sugarhistory/Rectangle5.png",
//     },
//     {
//       period: "1800 S",
//       title: "Discovery of Sugar Beet",
//       text: [
//         "Scientists in Europe discover that sugar can be extracted from beets.",
//         "Napoleon supports beet sugar production to counter British naval blockades that limited sugarcane imports.",
//       ],
//       background: "/img/sugarhistory/6.png",
//       image: "/img/sugarhistory/Rectangle6.png",
//     },
//     {
//       period: "Mid-1800 S",
//       title: "Sugar Industry Begins in Egypt (Modern Era)",
//       text: [
//         "Under Muhammad Ali Pasha, Egypt modernizes its agriculture and begins industrial sugar production, especially in Upper Egypt (Minya and Armant).",
//         "State-run sugar factories are established, and sugar beet cultivation expands in northern Egypt.",
//       ],
//       background: "/img/sugarhistory/7.png",
//       image: "/img/sugarhistory/Rectangle7.png",
//     },
//     {
//       period: "1900 S",
//       title: "Industrialization and Expansion",
//       text: [
//         "Egypt develops several state-owned sugar companies, such as:",
//         "Delta Sugar Company (Kafr El Sheikh)",
//         "El Hawamdeya Sugar Refinery",
//         "Kom Ombo Sugar Factory",
//         "Egypt produces sugar from both cane (in Upper Egypt) and beet (in the Delta region).",

//       ],
//       background: "/img/sugarhistory/8.png",
//       image: "/img/sugarhistory/Rectangle8.png",
//     },
//     {
//       period: "2000 S",
//       title: "Market Growth and Imports",
//       text: [
//         "Egypt's sugar consumption grows rapidly with population increase.",
//         "Despite local production, Egypt becomes one of the top sugar importers globally.",
//         "The government supports the expansion of beet cultivation due to its shorter growing cycle and water efficiency.",

//       ],
//       background: "/img/sugarhistory/9.png",
//       image: "/img/sugarhistory/Rectangle9.png",
//     },
//     {
//       period: "2010 S",
//       title: "Digitalization and Sustainability",
//       text: [
//         "Egyptian sugar companies begin investing in modernization, automation, and precision agriculture.",
//         "Public-private partnerships emerge to support beet farmers and reduce reliance on imports.",
//       ],
//       background: "/img/sugarhistory/10.png",
//       image: "/img/sugarhistory/Rectangle10.png",
//     },
//     {
//       period: "2020 S",
//       title: "Egypt’s Sugar Sector Today",
//       text: [
//         "Egypt produces around 2.8 million tons of sugar annually, covering over 70% of national consumption.",
//         "Sugar beet accounts for over 60% of domestic production, with strong seasonal campaigns.",
//         "Recent focus includes:",
//         "Digital systems for managing beet supply and farmer contracts",
//         "Environmentally friendly processing",
//         "Expansion of private sector investments in sugar refining",

//       ],
//       background: "/img/sugarhistory/11.png",
//       image: "/img/sugarhistory/Rectangle11.png",
//     },
//   ];

//   const { data, loading } = useSelector((state) => state.sugarHistory);
   
//   if (loading || !data?.data) return null;

//   const { title, desc} = data.data.main;
//     // const slides = data.data.list; 


//   return (
//     <div className={styles.historyContainer}>
//       <div className={styles.sidebar}>
//         <div>
//           <h2 className={styles.sidebarTitle}>{title}</h2>
//           {/* <p className={styles.sidebarText}>
//             While chewing sugar cane for its sweet taste was likely done in
//             prehistory, the first indications of the domestication of sugar cane
//             were around 8000 BCE. Follow sugar's historical journey across the
//             world and the advances in technology that allow us to enjoy sugar
//             today.
//           </p> */}
//           <div
//               dangerouslySetInnerHTML={{ __html : desc }}
//           ></div>
//         </div>



//         <div className={styles.navButtons}>

//           <div className=" w-100 mb-3">
//             {isEnd && (
//               <button
//                 onClick={() => {
//                   swiperRef.current?.slideTo(0);
//                   setActiveIndex(0);
//                   setIsEnd(false);
//                 }}
//                 className={styles.restartBtn}
//               >
//                 ⟳ Back to beginning
//               </button>
//             )}
//           </div>
//           <div className=" d-flex align-items-center justify-content-between w-100">


//             <button ref={prevRef} className={styles.prevBtn}>
//               ‹ Previously
//             </button>
//             <button
//               ref={nextRef}
//               className={`${styles.nextBtn} ${isEnd ? styles.disabled : ""}`}
//               disabled={isEnd}
//             >
//               Next ›
//             </button>

//           </div>

//         </div>
//       </div>

//       <div className={styles.sliderWrapper}>
//         <Swiper
//           modules={[Navigation, Autoplay]}

//           spaceBetween={0}
//           slidesPerView={1.99}
//           slidesPerGroup={1}
//           centeredSlides={true}
//           initialSlide={0}
//           grabCursor={true}
//           loop={false}
//           watchSlidesProgress={true}
//           allowTouchMove={true}
//           touchRatio={1}
//           slidesOffsetBefore={0}
//           centeredSlidesBounds={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               centeredSlides: true,
//             },
//             768: {
//               slidesPerView: 2,
//               centeredSlides: false,
//             },
//             1024: {
//               slidesPerView: 1.99,
//               centeredSlides: true,
//             },
//           }}
//           onInit={(swiper) => {
//             swiperRef.current = swiper;
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//             prevRef.current?.setAttribute("disabled", "true");
//             prevRef.current?.classList.add(styles.disabled);
//           }}
//           onSlideChange={(swiper) => {
//             setActiveIndex(swiper.realIndex);
//             setIsEnd(swiper.realIndex === slides.length - 1);
//             if (swiper.realIndex === 0) {
//               prevRef.current?.setAttribute("disabled", "true");
//               prevRef.current?.classList.add(styles.disabled);
//             } else {
//               prevRef.current?.removeAttribute("disabled");
//               prevRef.current?.classList.remove(styles.disabled);
//             }

//           }}
//           onReachEnd={() => {
//             setIsEnd(true);
//           }}
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className={`${styles.slideCard} ${index === activeIndex ? styles.activeSlide : ""
//                   }`}
//                 style={{ "--bg-image": `url(${slide.background})` }}
//               >
//                 <h3 className={styles.period}>
//                   {formatPeriodText(slide.period)}
//                 </h3>
//                 <h4 className={styles.title}>{slide.title}</h4>
//                 <ul className={styles.textList}>
//                   {slide.text.map((t, i) => (
//                     <li key={i}>{t}</li>
//                   ))}
//                 </ul>

//                 {slide.image && (
//                   <div className={styles.bottomImageWrapper}>
//                     <img
//                       src={slide.image}
//                       alt=""
//                       className={styles.bottomImage}
//                     />
//                   </div>
//                 )}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }





import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./SugarHistoryComm.module.css";
import { useSelector } from "react-redux";

function formatPeriodText(text) {
  const specialWords = ["BCE", "CE", "S"];
  return text.split(" ").map((word, index) => {
    if (specialWords.includes(word)) {
      return (
        <span key={index} className={styles.subText}>
          {word}
        </span>
      );
    }
    return word + " ";
  });
}

export default function SugarHistoryComm() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // const slides = [
  //   {
  //     period: "~8000 BCE – 500 BCE",
  //     title: "Origin of Sugarcane Cultivation",
  //     text: [
  //       "Sugarcane is first domesticated in New Guinea and later spreads to India and Southeast Asia.",
  //       "Indians discover how to crystallize sugar from sugarcane juice — the earliest form of refined sugar.",
  //     ],
  //     background: "/img/sugarhistory/1.png",
  //     image: "/img/sugarhistory/Rectangle1.png",
  //   },
  //   {
  //     period: "~400 BCE – 600 CE",
  //     title: "Sugar Spreads to the Middle East",
  //     text: [
  //       "Through trade and conquest, sugar technology spreads westward from India to Persia and the Arab world.",
  //       "The word “sugar” derives from the Sanskrit “sharkara,” entering Arabic as “sukkar”.",
  //     ],
  //     background: "/img/sugarhistory/2.png",
  //     image: "/img/sugarhistory/Rectangle2.png",
  //   },
  //   {
  //     period: "641 CE – 1000 S",
  //     title: "Sugar Introduced in Egypt under Islamic Rule",
  //     text: [
  //       "With the Arab conquest of Egypt, sugarcane is introduced and cultivated in the Nile Delta and Upper Egypt.",
  //       "Egypt becomes a notable sugar-producing region during the Islamic Golden Age, exporting to the Mediterranean.",
  //     ],
  //     background: "/img/sugarhistory/3.png",
  //     image: "/img/sugarhistory/Rectangle3.png",
  //   },
  //   {
  //     period: "1100 S – 1500 S",
  //     title: "Sugar in Europe",
  //     text: [
  //       "Crusaders bring sugar to Europe from the Middle East, calling it “white gold”.",
  //       "Sugar remains a luxury item used only by the elite.",
  //     ],
  //     background: "/img/sugarhistory/4.png",
  //     image: "/img/sugarhistory/Rectangle4.png",
  //   },
  //   {
  //     period: "1500 CE – 1800 S",
  //     title: "Colonial Expansion & Sugar Plantations",
  //     text: [
  //       "European powers establish large sugar plantations in the Caribbean, South America, and Indian Ocean islands.",
  //       "Sugar becomes a global commodity, driving colonial economies and unfortunately linked to the transatlantic slave trade.",
  //     ],
  //     background: "/img/sugarhistory/5.png",
  //     image: "/img/sugarhistory/Rectangle5.png",
  //   },
  //   {
  //     period: "1800 S",
  //     title: "Discovery of Sugar Beet",
  //     text: [
  //       "Scientists in Europe discover that sugar can be extracted from beets.",
  //       "Napoleon supports beet sugar production to counter British naval blockades that limited sugarcane imports.",
  //     ],
  //     background: "/img/sugarhistory/6.png",
  //     image: "/img/sugarhistory/Rectangle6.png",
  //   },
  //   {
  //     period: "Mid-1800 S",
  //     title: "Sugar Industry Begins in Egypt (Modern Era)",
  //     text: [
  //       "Under Muhammad Ali Pasha, Egypt modernizes its agriculture and begins industrial sugar production, especially in Upper Egypt (Minya and Armant).",
  //       "State-run sugar factories are established, and sugar beet cultivation expands in northern Egypt.",
  //     ],
  //     background: "/img/sugarhistory/7.png",
  //     image: "/img/sugarhistory/Rectangle7.png",
  //   },
  //   {
  //     period: "1900 S",
  //     title: "Industrialization and Expansion",
  //     text: [
  //       "Egypt develops several state-owned sugar companies, such as:",
  //       "Delta Sugar Company (Kafr El Sheikh)",
  //       "El Hawamdeya Sugar Refinery",
  //       "Kom Ombo Sugar Factory",
  //       "Egypt produces sugar from both cane (in Upper Egypt) and beet (in the Delta region).",

  //     ],
  //     background: "/img/sugarhistory/8.png",
  //     image: "/img/sugarhistory/Rectangle8.png",
  //   },
  //   {
  //     period: "2000 S",
  //     title: "Market Growth and Imports",
  //     text: [
  //       "Egypt's sugar consumption grows rapidly with population increase.",
  //       "Despite local production, Egypt becomes one of the top sugar importers globally.",
  //       "The government supports the expansion of beet cultivation due to its shorter growing cycle and water efficiency.",

  //     ],
  //     background: "/img/sugarhistory/9.png",
  //     image: "/img/sugarhistory/Rectangle9.png",
  //   },
  //   {
  //     period: "2010 S",
  //     title: "Digitalization and Sustainability",
  //     text: [
  //       "Egyptian sugar companies begin investing in modernization, automation, and precision agriculture.",
  //       "Public-private partnerships emerge to support beet farmers and reduce reliance on imports.",
  //     ],
  //     background: "/img/sugarhistory/10.png",
  //     image: "/img/sugarhistory/Rectangle10.png",
  //   },
  //   {
  //     period: "2020 S",
  //     title: "Egypt’s Sugar Sector Today",
  //     text: [
  //       "Egypt produces around 2.8 million tons of sugar annually, covering over 70% of national consumption.",
  //       "Sugar beet accounts for over 60% of domestic production, with strong seasonal campaigns.",
  //       "Recent focus includes:",
  //       "Digital systems for managing beet supply and farmer contracts",
  //       "Environmentally friendly processing",
  //       "Expansion of private sector investments in sugar refining",

  //     ],
  //     background: "/img/sugarhistory/11.png",
  //     image: "/img/sugarhistory/Rectangle11.png",
  //   },
  // ];

  const { data, loading } = useSelector((state) => state.sugarHistory);
   
  if (loading || !data?.data) return null;

  const { title, desc} = data.data.main;
    const slides = data.data.list; 


  return (
    <div className={styles.historyContainer}>
      <div className={styles.sidebar}>
        <div>
          <h2 className={styles.sidebarTitle}>{title}</h2>
          {/* <p className={styles.sidebarText}>
            While chewing sugar cane for its sweet taste was likely done in
            prehistory, the first indications of the domestication of sugar cane
            were around 8000 BCE. Follow sugar's historical journey across the
            world and the advances in technology that allow us to enjoy sugar
            today.
          </p> */}
          <div className={styles.subsidebarTitle}
              dangerouslySetInnerHTML={{ __html : desc }}
          ></div>
        </div>



        <div className={styles.navButtons}>

          <div className=" w-100 mb-3">
            {isEnd && (
              <button
                onClick={() => {
                  swiperRef.current?.slideTo(0);
                  setActiveIndex(0);
                  setIsEnd(false);
                }}
                className={styles.restartBtn}
              >
                ⟳ Back to beginning
              </button>
            )}
          </div>
          <div className=" d-flex align-items-center justify-content-between w-100">


            <button ref={prevRef} className={styles.prevBtn}>
              ‹ Previously
            </button>
            <button
              ref={nextRef}
              className={`${styles.nextBtn} ${isEnd ? styles.disabled : ""}`}
              disabled={isEnd}
            >
              Next ›
            </button>

          </div>

        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1.99}
          slidesPerGroup={1}
          centeredSlides={true}
          initialSlide={0}
          grabCursor={true}
          loop={false}
          watchSlidesProgress={true}
          allowTouchMove={true}
          touchRatio={1}
          slidesOffsetBefore={0}
          centeredSlidesBounds={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 1.99, centeredSlides: true },
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();

            prevRef.current?.setAttribute("disabled", "true");
            prevRef.current?.classList.add(styles.disabled);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            setIsEnd(swiper.realIndex === slides.length - 1);

            if (swiper.realIndex === 0) {
              prevRef.current?.setAttribute("disabled", "true");
              prevRef.current?.classList.add(styles.disabled);
            } else {
              prevRef.current?.removeAttribute("disabled");
              prevRef.current?.classList.remove(styles.disabled);
            }
          }}
          onReachEnd={() => setIsEnd(true)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id || index}>
              <div
                className={`${styles.slideCard} ${
                  index === activeIndex ? styles.activeSlide : ""
                }`}
                style={{ "--bg-image": `url(${slide.bg_image})` }}
              >
                <h3 className={styles.period}>{formatPeriodText(slide.title)}</h3>
                <h4 className={styles.title}>{slide.sub_title}</h4>

                <div
                  className={styles.textList}
                  dangerouslySetInnerHTML={{ __html: slide.desc }}
                />

                {slide.image && (
                  <div className={styles.bottomImageWrapper}>
                    <img
                      src={slide.image}
                      alt={slide.sub_title || ""}
                      className={styles.bottomImage}
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
