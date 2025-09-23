import Seo from '../../Seo';
import styles from "./Homebanner.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomeBanner() {


  const { data, loading } = useSelector((state) => state.home);
  const news = data?.data?.banners || [];
  const main = news?.main || {};
  const slides = news?.slides || [];
  const logos = news?.logos || [];

  return (
    <>

      <div className={styles.bannercontent}>

        <div className={styles.bannertitle}>
          <h2>{main?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: main?.desc }} />
          {main?.call_to_action_text && (
            <button className={styles.bannerbutton}>
              <Link to={main?.call_to_action_link}>
                {main?.call_to_action_text}
              </Link>
            </button>
          )}
        </div>

        {logos.length > 0 && (
          <div className={styles.bannerlogos}>
            <ul>
              {logos.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={`logo-${index}`} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <Swiper
          dir={document.dir === "rtl" ? "rtl" : "ltr"}
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
          {slides.map((item, index) => (
            <SwiperSlide key={index} className={styles.slideWrapper}>
              <img
                className={styles.slideImage}
                src={item.image}
                alt={`slide-${index}`}
              />
              <div className={styles.overlay}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
