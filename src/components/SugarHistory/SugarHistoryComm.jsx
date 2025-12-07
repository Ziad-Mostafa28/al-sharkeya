
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

  const { data, loading } = useSelector((state) => state.sugarHistory);
  const lang = useSelector((state) => state.lang.lang);


  if (loading || !data?.data) return null;

  const { title, desc } = data.data.main;
  const slides = data.data.list;
  const isArabic = lang === 'ar';



  return (
    <div className={styles.historyContainer}>
      <div className={styles.sidebar}>
        <div>
          <h2 className={styles.sidebarTitle}>{title}</h2>
          <div className={styles.subsidebarTitle}
            dangerouslySetInnerHTML={{ __html: desc }}
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
                {isArabic ? "⟳ العودة للبداية" : "⟳ Back to beginning"}
              </button>
            )}
          </div>
          <div className=" d-flex align-items-center justify-content-between w-100">


            <button ref={prevRef} className={styles.prevBtn}>
              {isArabic ? "‹ السابق" : "‹ Previously"}

            </button>
            <button
              ref={nextRef}
              className={`${styles.nextBtn} ${isEnd ? styles.disabled : ""}`}
              disabled={isEnd}
            >
              {isArabic ? "التالي ›" : "Next ›"}
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
                className={`${styles.slideCard} ${index === activeIndex ? styles.activeSlide : ""
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
