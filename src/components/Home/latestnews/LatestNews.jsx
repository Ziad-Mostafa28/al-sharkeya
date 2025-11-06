// import React, { useState, useEffect } from 'react';
// import styles from './LatestNews.module.css';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// // ✅ Hook to track window width
// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return width;
// }

// export default function LatestNews() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const width = useWindowWidth();

//   const { data, loading } = useSelector((state) => state.home);
//   const lang = useSelector((state) => state.lang.lang);
//   const isArabic = lang === 'ar';

//   if (loading || !data?.data.news) return null;

//   const news = data.data.news;

//   const handleHover = (index) => {
//     setActiveIndex(index);
//   };

//   const parseDate = (dateString) => {
//     const parts = dateString.split(" ");
//     return {
//       day: parts[0],
//       month: parts[1],
//     };
//   };

//   return (
//     <section className={`${styles.latestNews}`}>
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3 className="fw-bold">Latest News</h3>
//         <Link to={'news'} className={styles.viewAll}>
//           {isArabic ? 'عرض الكل' : 'View all'}
//         </Link>
//       </div>

//       <div className="row">
//         {/* Left Image */}
//         <div className="col-lg-6 mb-4 mb-lg-0">
//           <img
//             src={news[activeIndex].image}
//             alt={news[activeIndex].title}
//             className={`rounded ${styles.newsImage}`}
//           />
//         </div>

//         {/* Right Tabs */}
//         <div className="col-lg-6">
//           <div className={`rounded ${styles.newsList}`}>
//             {news.map((item, index) => {
//               const { day, month } = parseDate(item.date);
//               return (
//                 <div
//                   key={item.id}
//                   className={`d-flex ${styles.newsItem} ${
//                     index === activeIndex ? styles.active : ''
//                   }`}
//                   onMouseEnter={() => handleHover(index)}
//                 >
//                   <div className={styles.dateBox}>
//                     <div className={styles.day}>{day}</div>
//                     <div className={styles.month}>{month}</div>
//                   </div>

//                   <div className="flex-grow-1 px-3">
//                     <span className={styles.text}>
//                       {width < 768
//                         ? item.title.slice(0, 30) + (item.title.length > 30 ? '...' : '')
//                         : item.title}
//                     </span>
//                   </div>

//                   <div className={styles.readMore}>
//                     <Link to={`/${lang}/news-details/${item.id}`}>
//                       Read
//                       <br />
//                       more
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import styles from "./LatestNews.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// ✅ Hook to track window width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function LatestNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = useWindowWidth();

  const { data, loading } = useSelector((state) => state.homeWithOrdering);
  const lang = useSelector((state) => state.lang.lang);
  const isArabic = lang === "ar";

  const newsList =
    data?.data?.sections?.find((section) => section.latest_news)?.latest_news
      ?.list || [];

  if (loading || !Array.isArray(newsList) || newsList.length === 0) {
    return null;
  }

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const parseDate = (dateString) => {
    if (!dateString) return { day: "", month: "" };
    const parts = dateString.split(" ");
    return {
      day: parts[0] || "",
      month: parts[1] || "",
    };
  };

  return (
    <section className={styles.latestNews}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">
          {isArabic ? "آخر الأخبار" : "Latest News"}
        </h3>
        <Link to={`/${lang}/news`} className={styles.viewAll}>
          {isArabic ? "عرض الكل" : "View all"}
        </Link>
      </div>

      <div className="row">
        {/* Left Image */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={newsList[activeIndex]?.image}
            alt={newsList[activeIndex]?.title || ""}
            className={`rounded ${styles.newsImage}`}
          />
        </div>

        {/* Right Tabs */}
        <div className="col-lg-6">
          <div className={`rounded ${styles.newsList}`}>
            {newsList.map((item, index) => {
              const { day, month } = parseDate(item.date);
              return (
                <div
                  key={item.id}
                  className={`d-flex ${styles.newsItem} ${
                    index === activeIndex ? styles.active : ""
                  }`}
                  onMouseEnter={() => handleHover(index)}
                >
                  <div className={styles.dateBox}>
                    <div className={styles.day}>{day}</div>
                    <div className={styles.month}>{month}</div>
                  </div>

                  <div className="flex-grow-1 px-3">
                    <span className={styles.text}>
                      {width < 768
                        ? item.title.slice(0, 30) +
                          (item.title.length > 30 ? "..." : "")
                        : item.title}
                    </span>
                  </div>

                  <div className={styles.readMore}>
                    <Link to={`/${lang}/news-details/${item.id}`}>
                      {isArabic ? (
                        <>
                          اقرأ
                          <br />
                          المزيد
                        </>
                      ) : (
                        <>
                          Read
                          <br />
                          more
                        </>
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
