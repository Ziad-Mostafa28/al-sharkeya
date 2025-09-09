import React, { useState, useEffect } from 'react';
import styles from './LatestNews.module.css';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    date: '25',
    month: 'June',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image: '/img/homepage/news1.png',
  },
  {
    id: 2,
    date: '5',
    month: 'May',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image: '/img/homepage/news2.png',
  },
  {
    id: 3,
    date: '7',
    month: 'April',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image: '/img/homepage/news3.png',
  },
  {
    id: 4,
    date: '21',
    month: 'Mars',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image: '/img/homepage/news4.png',
  },
  {
    id: 5,
    date: '1',
    month: 'Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image: '/img/homepage/news5.png',
  },
];

// ✅ Hook to track window width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function LatestNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = useWindowWidth();

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={` ${styles.latestNews}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Latest News</h3>
        <Link to={'news'} className={styles.viewAll}>View all</Link>
      </div>

      <div className="row">
        {/* Left Image */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={newsItems[activeIndex].image}
            alt="News"
            className={`rounded ${styles.newsImage}`}
          />
        </div>

        {/* Right Tabs */}
        <div className="col-lg-6">
          <div className={`rounded ${styles.newsList}`}>
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`d-flex ${styles.newsItem} ${index === activeIndex ? styles.active : ''}`}
                onMouseEnter={() => handleHover(index)}
              >
                <div className={styles.dateBox}>
                  <div className={styles.day}>{item.date}</div>
                  <div className={styles.month}>{item.month}</div>
                </div>

                <div className="flex-grow-1 px-3">
                  <span className={styles.text}>
                    {width < 768
                      ? item.text.slice(0, 30) + (item.text.length > 30 ? '...' : '')
                      : item.text}
                  </span>
                </div>

                <div className={styles.readMore}>
                  <a href="#">Read
                    <br />
                    more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
