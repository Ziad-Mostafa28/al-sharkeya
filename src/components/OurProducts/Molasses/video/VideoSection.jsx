import React, { useRef, useState } from 'react';
import styles from "./VideoSection.module.css";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <section >
      <div className='container'>
        <div className='text-center mb-4'>
          <h3 className={styles.titleVideo}>Molasses: Nature’s Rich and Versatile By-Product</h3>
          <p className={styles.subtitleVideo}>Molasses is a thick, viscous by-product derived from refining sugarcane or sugar beet juice into sugar. Its composition varies depending on the sugar content and extracti
Sugar beet molasses is commonly utilized in fermentation industries, yeast production, and nutritious livestock feed. Sugarcane molasses, on the other hand, is widely u
animal feed.
Molasses also serves as a key ingredient in commercial brown sugar, enriching its color and flavor. It is naturally rich in vitamins and minerals, including vitamin B6, iron, c
There are several types of molasses, which differ based on the number of times the syrup is boiled and refined, each offering distinct flavor and color characteristics.</p>
        </div>

        <div className={styles.dev_video}>
          <div className={`${styles.overlay} ${isPlaying ? styles.hidden : ''}`}></div>

          <div className={`${styles.textbox} ${isPlaying ? styles.animateText : ''}`}>
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="white" fontSize="20" fontWeight="400">
                {/* <textPath href="#circlePath" startOffset="35%" textAnchor="middle">
                  What Makes Us Different 
                </textPath> */}
              </text>
            </svg>

            <div className={styles.playButton}>▶</div>
          </div>

          {/* <video
            controls
            ref={videoRef}
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src="/img/homepage/video.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </section>
  );
}
