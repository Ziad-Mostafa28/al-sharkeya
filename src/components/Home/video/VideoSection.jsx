// import React, { useRef, useState } from 'react';
// import styles from "./VideoSection.module.css";

// export default function VideoSection({ videoUrl}) {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => setIsPlaying(true);
//   const handlePause = () => setIsPlaying(false);

//   return (
//     <section className='my-5'>
//       <div className='container'>
//         <div className={styles.dev_video}>
//           <div className={`${styles.overlay} ${isPlaying ? styles.hidden : ''}`}></div>

//           <div className={`${styles.textbox} ${isPlaying ? styles.animateText : ''}`}>
//             <svg viewBox="0 0 200 200">
//               <defs>
//                 <path
//                   id="circlePath"
//                   d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
//                 />
//               </defs>
//               <text fill="white" fontSize="20" fontWeight="400">
//                 <textPath href="#circlePath" startOffset="35%" textAnchor="middle">
//                   What Makes Us Different 
//                 </textPath>
//               </text>
//             </svg>

//             <div className={styles.playButton}>▶</div>
//           </div>

//           <video
//             controls
//             ref={videoRef}
//             onPlay={handlePlay}
//             onPause={handlePause}
//           >
//             <source
//               src={videoUrl}
//               type="video/mp4"
//             />
//           </video>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import styles from "./VideoSection.module.css";

export default function VideoSection({ youtubeUrl }) {
  return (
    <section className="my-5">
      <div className="container">
        <div className={styles.dev_video}>
          {/* <div className={styles.textbox}>
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="white" fontSize="20" fontWeight="400">
                <textPath href="#circlePath" startOffset="35%" textAnchor="middle">
                  What Makes Us Different
                </textPath>
              </text>
            </svg>

            <div className={styles.playButton}>▶</div>
          </div> */}

          <div className={styles.videoWrapper}>
            <iframe
              src={youtubeUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
