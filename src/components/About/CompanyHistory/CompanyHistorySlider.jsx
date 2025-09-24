import React, { useRef, useState } from "react";
import styles from "./CompanyHistorySlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from "react-redux";

export default function CompanyHistorySlider() {
    const { data, loading } = useSelector((state) => state.aboutHistory);
    const history = data?.data?.history || [];

    const [activeIndex, setActiveIndex] = useState(0);

    const desktopSwiperRef = useRef(null);
    const mobileTimelineRef = useRef(null);
    const mobileContentRef = useRef(null);

    if (loading || !history.length) return null;

    const handleYearClick = (index) => {
        setActiveIndex(index);

        if (mobileContentRef.current) {
            mobileContentRef.current.slideTo(index);
        }

        if (mobileTimelineRef.current) {
            mobileTimelineRef.current.slideTo(index);
        }

        if (desktopSwiperRef.current) {
            desktopSwiperRef.current.slideTo(index);
        }
    };

    const handleTimelinePrev = () => {
        if (mobileTimelineRef.current) {
            mobileTimelineRef.current.slidePrev();
        }
    };

    const handleTimelineNext = () => {
        if (mobileTimelineRef.current) {
            mobileTimelineRef.current.slideNext();
        }
    };

    return (
        <section className={`${styles.historySection} container py-5`}>
            {/* ===== Desktop Layout ===== */}
            <div className="d-none d-md-flex row align-items-start">
                <div className="col-12 col-md-3">
                    <div className={styles.timelineContainer}>
                        <ul className={styles.timeline}>
                            {history.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={`${styles.timelineItem} ${activeIndex === index ? styles.active : ""
                                        }`}
                                    onClick={() => handleYearClick(index)}
                                >
                                    <span>{item.year}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-12 col-md-9">
                    <div className={styles.swiperContainer}>
                        <Swiper
                            direction="vertical"
                            slidesPerView={1}
                            spaceBetween={30}
                            speed={600}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
                            className={styles.swiper}
                        >
                            {history.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.contentBox}>
                                        <img
                                            src={item.image}
                                            alt={`Year ${item.year}`}
                                            className="img-fluid rounded mb-3"
                                        />
                                        <p
                                            dangerouslySetInnerHTML={{ __html: item.desc }}
                                        ></p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* ===== Mobile Layout ===== */}
            <div className={`${styles.mobilee} d-block d-md-none`}>
                <div className="position-relative">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        modules={[Navigation]}
                        centeredSlides={true}
                        loop={false}
                        onSlideChange={(swiper) => {
                            const newIndex = swiper.realIndex || swiper.activeIndex;
                            setActiveIndex(newIndex);
                            if (mobileContentRef.current) {
                                mobileContentRef.current.slideTo(newIndex);
                            }
                        }}
                        onSwiper={(swiper) => (mobileTimelineRef.current = swiper)}
                        className="mb-3"
                    >
                        {history.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className={`${styles.timelineItem} ${styles.mobileTimelineItem} ${activeIndex === index ? styles.active : ""
                                        }`}
                                    onClick={() => handleYearClick(index)}
                                >
                                    {item.year}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handleTimelinePrev}
                        className={`${styles.mobileNavBtn} ${styles.prevBtn} position-absolute top-50 start-0 translate-middle-y`}
                        style={{ zIndex: 10 }}
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={handleTimelineNext}
                        className={`${styles.mobileNavBtn} ${styles.nextBtn} position-absolute top-50 end-0 translate-middle-y`}
                        style={{ zIndex: 10 }}
                    >
                        &#8250;
                    </button>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    speed={600}
                    allowTouchMove={true}
                    onSlideChange={(swiper) => {
                        const newIndex = swiper.activeIndex;
                        setActiveIndex(newIndex);
                        if (mobileTimelineRef.current) {
                            mobileTimelineRef.current.slideTo(newIndex);
                        }
                    }}
                    onSwiper={(swiper) => (mobileContentRef.current = swiper)}
                >
                    {history.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.contentBox}>
                                <img
                                    src={item.image}
                                    alt={`Year ${item.year}`}
                                    className="img-fluid rounded mb-3"
                                />
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.desc }}
                                ></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
