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
          <h3 className={styles.titleVideo}>Molasses a sweet byproduct of sugar refining</h3>
          <p className={styles.subtitleVideo}>Is  a viscous byproduct, principally obtained from the refining of sugarcane or sugar beet juice into sugar. Molasses varies in the amount of sugar, the method of extraction. Sugarcane molasses is usually used to sweeten and flavor foods. Molasses is a major constituent of fine commercial brown sugar.</p>
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
