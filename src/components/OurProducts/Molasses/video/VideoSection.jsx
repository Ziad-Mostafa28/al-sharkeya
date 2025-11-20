// import React from 'react';
// import styles from "./VideoSection.module.css";

// export default function VideoSection({ data }) {
//    if (!data) return null;
//   const { title, description } = data;


//   return (
//     // <section className={styles.VideoSec}>
//     //   <div className='container'>
//     //     <div className='text-center'>
//     //       <h3 className={styles.titleVideo}>Molasses: Nature’s Rich and Versatile By-Product</h3>
//     //       <p className={styles.subtitleVideo}>Molasses is a thick, viscous by-product derived from refining sugarcane or sugar beet juice into sugar. Its composition varies depending on the sugar content and extracti
//     //         Sugar beet molasses is commonly utilized in fermentation industries, yeast production, and nutritious livestock feed. Sugarcane molasses, on the other hand, is widely u
//     //         animal feed.
//     //         Molasses also serves as a key ingredient in commercial brown sugar, enriching its color and flavor. It is naturally rich in vitamins and minerals, including vitamin B6, iron, c
//     //         There are several types of molasses, which differ based on the number of times the syrup is boiled and refined, each offering distinct flavor and color characteristics.</p>
//     //     </div>

//     //   </div>
//     // </section>


//      <section className={styles.VideoSec}>
//       <div className='container'>
//         <div className='text-center'>
//           {title && <h3 className={styles.titleVideo}>{title}</h3>}
//           {description && (
//             <p
//               className={styles.subtitleVideo}
//               dangerouslySetInnerHTML={{ __html: description }}
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import styles from "./VideoSection.module.css";

export default function VideoSection() {


  return (
    <section className={styles.VideoSec}>
      <div className='container'>
        <div className='text-center'>
          <h3 className={styles.titleVideo}>Molasses: Nature’s Rich and Versatile By-Product</h3>
          <p className={styles.subtitleVideo}>Molasses is a thick, viscous by-product derived from refining sugarcane or sugar beet juice into sugar. Its composition varies depending on the sugar content and extracti
            Sugar beet molasses is commonly utilized in fermentation industries, yeast production, and nutritious livestock feed. Sugarcane molasses, on the other hand, is widely u
            animal feed.
            Molasses also serves as a key ingredient in commercial brown sugar, enriching its color and flavor. It is naturally rich in vitamins and minerals, including vitamin B6, iron, c
            There are several types of molasses, which differ based on the number of times the syrup is boiled and refined, each offering distinct flavor and color characteristics.</p>
        </div>

      </div>
    </section>


 
  );
}
