import React from 'react'
import styles from "./SecBanner.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function SecBanner() {

      const slides = [
    {
      image: '/img/homepage/1.png',
      text: '',
    },
    {
      image: '/img/homepage/2.png',
      text: '',
    },
    {
      image: '/img/homepage/3.png',
      text: '',
    },
    {
      image: '/img/homepage/4.png',
      text: '',
    },
    {
      image: '/img/homepage/5.png',
      text: '',
    },
    {
      image: '/img/homepage/6.png',
      text: '',
    },
  ];

  const secondslide =[
    {
      image: '/img/homepage/banner.png',
      text: '',
    },
    {
      image: '/img/homepage/banner2.png',
      text: '',
    },
    {
      image: '/img/homepage/banner3.png',
      text: '',
    },
    {
      image: '/img/homepage/banner4.png',
      text: '',
    }
  ];
  return (
       <>
      {/* ✅ تحسين SEO */}
      <Seo
        title="Al Sharkeya | Home"
        description="Explore the latest news and updates from Al Sharkeya."
        keywords="Al Sharkeya, Egypt, News, Industry"
        canonical="https://alsharkeya.com/"
      />

      <div className={styles.bannercontent}>
          <div className={styles.bannertitle}>
            <h2>Al Sharkeya Sugar</h2>
            <p>Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E. has distinguished expertise in the field of breeding, harvesting of sugar beet and manufactures and produces a high-quality white sugar by latest technology methodology applying good manufacture practice.</p>
            <button className={styles.bannerbutton}>
              <Link to="">Who we are</Link>
            </button>
          </div>
          <div className={styles.bannerlogos}>
            <ul>
              {slides.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.text} />
                </li>
              ))}
            </ul>
          </div>

          <Swiper 
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper h-100"
          >
            {secondslide.map((item, index) => (
              <SwiperSlide key={index} className={styles.slideWrapper}>
                <img className={styles.slideImage} src={item.image} alt={item.text} />
                <div className={styles.overlay}></div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </>
  )
}
