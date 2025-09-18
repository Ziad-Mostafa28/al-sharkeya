"use client";
import React, { useRef, useState } from "react";
import styles from "./CompanyHistorySlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CompanyHistorySlider() {
    const years = [
        { year: 2012, image: "/img/aboutus/slide1.png", description: "<strong>Al Sharkeya Sugar Manufacturing (ALNouran) S.A.E</strong> was founded, building Egypt's first state of the art sugar manufacturing facility in the governorate of Al Sharkeya." },
        { year: 2014, image: "/img/aboutus/slide2.png", description: "<strong>Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E</strong> secures an EGP <strong>1.5</strong> billion Senior Islamic Facility, an important milestone to achieving a target investment of EGP <strong>2.5</strong> billion." },
        { year: 2017, image: "/img/aboutus/slide3.png", description: "Sadek El Sewedy and Bank Misr signed on as shareholders, further enhancing the project's investments to EGP 3.5 billion." },
        { year: 2018, image: "/img/aboutus/slide4.png", description: "<strong>Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E</strong> secured an EGP <strong>360M</strong> senior facility top up & a capital increase of <strong>800M</strong>, further enhancing the project investment to EGP <strong>4.7</strong> billion." },
        { year: 2019, image: "/img/aboutus/slide5.png", description: "<strong>Al Sharkeya Sugar Manufacturing (ALNouran) S.A.E</strong> launched its first production line, operating for <strong>85</strong> days and processing <strong>639,000</strong> tons of sugar beet to produce <strong>90,000</strong> tons of sugar, <strong>36,000</strong> tons of molasses, and <strong>5,000</strong> tons of pellets." },
        { year: 2020, image: "/img/aboutus/slide6.png", description: "Over <strong>112</strong> days of operation, the factory processed <strong>995,000</strong> tons of sugar beet, producing <strong>137,000</strong> tons of sugar, <strong>54,000</strong> tons of animal feed, and <strong>54,000</strong> tons of molasses." },
        { year: 2021, image: "/img/aboutus/slide7.png", description: "Starting on February 20, 2021, the factory reached its maximum operational capacity, processing <strong>1.923</strong> million tons of sugar beet and producing <strong>245,763</strong> tons of sugar, <strong>103,100</strong> tons of pellets, and <strong>100,001</strong> tons of molasses." },
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
                                        <p
                                         dangerouslySetInnerHTML={{ __html: item.description }}
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
                                 <p
                                         dangerouslySetInnerHTML={{ __html: item.description }}
                                        ></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}