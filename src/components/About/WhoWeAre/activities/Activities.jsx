import React from 'react'
import styles from "./Activities.module.css";

export default function Activities() {
  return (
    <section className={styles.activities}>
        <h2>Its main activities are</h2>

        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className='d-flex flex-column align-items-center gap-4 mt-4'>
                        <img src="/img/aboutus/3.png" alt="" />
                        <p>Production of white sugar from sugar beet</p>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className='d-flex flex-column align-items-center gap-4 mt-4'>
                        <img src="/img/aboutus/4.png" alt="" />
                        <p>Refining raw sugar into white sugar</p>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className='d-flex flex-column align-items-center gap-4 mt-4'>
                        <img src="/img/aboutus/5.png" alt="" />
                        <p>Production and export of By-products (molasses and pellets) to the global market</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
