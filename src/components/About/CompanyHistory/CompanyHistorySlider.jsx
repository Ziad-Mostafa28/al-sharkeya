"use client";
import React, { useRef, useState } from "react";
import styles from "./CompanyHistorySlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CompanyHistorySlider() {
    const years = [
        { year: 2012, image: "/img/aboutus/slide1.png", description: "Al Sharkeya Sugar Manufacturing (ALNouran) S.A.E was founded, building Egypt's first state of the art sugar manufacturing facility in the governorate of Al Sharkeya." },
        { year: 2014, image: "/img/aboutus/slide2.png", description: "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E secures an EGP 1.5 billion Senior Islamic Facility, an important milestone to achieving a target investment of EGP 2.5 billion." },
        { year: 2017, image: "/img/aboutus/slide3.png", description: "Sadek El Sewedy and Bank Misr signed on as shareholders, further enhancing the project's investments to EGP 3.5 billion." },
        { year: 2018, image: "/img/aboutus/slide4.png", description: "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E secured an EGP 360M senior facility top up & a capital increase of 800M, further enhancing the project investment to EGP 4.7 billion." },
        { year: 2019, image: "/img/aboutus/slide5.png", description: "Al Sharkeya Sugar Manufacturing (ALNouran) S.A.E launched its first production line, operating for 85 days and processing 639,000 tons of sugar beet to produce 90,000 tons of sugar, 36,000 tons of molasses, and 5,000 tons of pellets." },
        { year: 2020, image: "/img/aboutus/slide6.png", description: "Over 112 days of operation, the factory processed 995,000 tons of sugar beet, producing 137,000 tons of sugar, 54,000 tons of animal feed, and 54,000 tons of molasses." },
        { year: 2021, image: "/img/aboutus/slide7.png", description: "Starting on February 20, 2021, the factory reached its maximum operational capacity, processing 1.923 million tons of sugar beet and producing 245,763 tons of sugar, 103,100 tons of pellets, and 100,001 tons of molasses." },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const desktopSwiperRef = useRef(null);
    const mobileTimelineRef = useRef(null);
    const mobileContentRef = useRef(null);

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
                            {years.map((item, index) => (
                                <li
                                    key={item.year}
                                    className={`${styles.timelineItem} ${activeIndex === index ? styles.active : ""}`}
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
                            {years.map((item) => (
                                <SwiperSlide key={item.year}>
                                    <div className={styles.contentBox}>
                                        <img src={item.image} alt={`Year ${item.year}`} className="img-fluid rounded mb-3" />
                                        <p className="text-muted">
                                            <strong>{item.year}:</strong> {item.description}
                                        </p>
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
                        {years.map((item, index) => (
                            <SwiperSlide key={item.year}>
                                <div
                                    className={`${styles.timelineItem} ${styles.mobileTimelineItem} ${activeIndex === index ? styles.active : ""}`}
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
                    {years.map((item) => (
                        <SwiperSlide key={item.year}>
                            <div className={styles.contentBox}>
                                <img src={item.image} alt={`Year ${item.year}`} className="img-fluid rounded mb-3" />
                                <p className="text-muted">
                                    <strong>{item.year}:</strong> {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}