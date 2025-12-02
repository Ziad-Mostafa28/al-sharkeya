// import React from 'react'
// import styles from './EconomicEnvironmental.module.css'

// export default function EconomicEnvironmental() {
//   return (
//     <>
//         <section className={`${styles.WhiteSugar}`}>
//                <div className={`container-fluid ${styles.customContainer}`}>
//                  <div className="row align-items-start">
//                    <div className={`col-md-8 ${styles.textBlock}`}>
//                      <h2>Economic and Environmental Benefits</h2>
//                      <strong>
//                        The use of molasses supports sustainability and circular economy principles:
//                        </strong>
//                        <ul className={`${styles.textBlockul}`}>
//                         <li><strong>Increased Added Value:</strong> Converts a by product into a valuable commodity, maximizing the use of the sugar beet crop.</li>
//                         <li><strong>Waste Reduction:</strong>  Minimizes industrial waste and supports eco-friendly production.</li>
//                         <li><strong>Resource Efficiency:</strong>  Offers a local energy source for animal feed, decreasing dependency on imported components.</li>
//                        </ul>
//                    </div>

//                    <div className={`col-md-4  ${styles.imageBlock}`}>
//                      <img
//                        src="/img/our-products/molasses/wood-pellets.png"
//                        alt="White sugar"
//                      />
//                    </div>
//                  </div>
//                </div>
//              </section>

//     </>
//   )
// }





import React from 'react'
import styles from './EconomicEnvironmental.module.css'

export default function EconomicEnvironmental({ data }) {
  if (!data) return null;
  const { title, description, image } = data;

  return (
    <>
      <section className={`${styles.WhiteSugar}`}>
        <div className={`container-fluid ${styles.customContainer}`}>
          <div className="row align-items-start">

            <div className={`col-md-4  ${styles.imageBlock}`}>
              <img
                src="/img/our-products/molasses/wood-pellets.png"
                alt="White sugar"
              />
            </div>

            <div className={`col-md-8 ${styles.textBlock}`}>
              {title && <h2>{title}</h2>}
              {description && (
                <div
                  dangerouslySetInnerHTML={{ __html: description }} >
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </>
  )
}