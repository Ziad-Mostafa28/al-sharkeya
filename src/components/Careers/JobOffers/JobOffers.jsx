import React from 'react'
import styles from './JobOffers.module.css'

export default function JobOffers() {
  return (
    <>
          <section className={`${styles.WhiteSugar}`}>
            <div className={`container-fluid ${styles.customContainer}`}>
              <div className="row ">
                <div className={`col-md-7 ${styles.textBlock}`}>
                  <h2>Latest Job Offers</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
    
                <div className={`col-md-5  ${styles.imageBlock}`}>
                  <img
                    src="../img/careers/image1.png"
                    alt="White sugar"
                  />
                </div>
              </div>
            </div>
          </section>



    
    </>
  )
}
