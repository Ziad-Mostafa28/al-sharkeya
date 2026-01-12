


// import React from "react";
// import styles from "./VideoSection.module.css";

// export default function VideoSection({ youtubeUrl }) {

//   console.log(youtubeUrl);
  
//   return (
//     <section className="my-5">
//       <div className="container">
//         <div className={styles.dev_video}>
//           {/* <div className={styles.textbox}>
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
//           </div> */}

//           <div className={styles.videoWrapper}>
//             <iframe
//               src={youtubeUrl}
//               title="YouTube video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";
// import styles from "./VideoSection.module.css";

// export default function VideoSection({ youtubeUrl }) {

//   const getEmbedUrl = (url) => {
//     if (!url) return "";
//     if (url.includes("embed")) return url;
//     return url.replace("watch?v=", "embed/");
//   };

//   return (
//     <section className="my-5">
//       <div className="container">
//         <div className={styles.dev_video}>
//           <div className={styles.videoWrapper}>
//             <iframe
//               src={getEmbedUrl(youtubeUrl)}
//               title="YouTube video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import styles from "./VideoSection.module.css";

export default function VideoSection({ youtubeUrl }) {
  const [play, setPlay] = useState(false);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const embed = url.includes("embed")
      ? url
      : url.replace("watch?v=", "embed/");
    return `${embed}?autoplay=1&rel=0`;
  };

  return (
    <section className="my-5">
      <div className="container">
        <div className={styles.dev_video}>

          {/* الفيديو دايمًا موجود */}
          <div className={styles.videoWrapper}>
            <iframe
              src={play ? getEmbedUrl(youtubeUrl) : ""}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* أيقونة التشغيل */}
          {!play && (
            <div
              className={styles.textbox}
              onClick={() => setPlay(true)}
            >
              <svg viewBox="0 0 200 200">
                <defs>
                  <path
                    id="circlePath"
                    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                  />
                </defs>
                <text fill="white" fontSize="18">
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    What Makes Us Different
                  </textPath>
                </text>
              </svg>

              <div className={styles.playButton}>▶</div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
