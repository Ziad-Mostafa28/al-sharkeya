import React from 'react'
import styles from './JobOffers.module.css'
import { useSelector } from 'react-redux';

export default function JobOffers() {
   const { data} = useSelector((state) => state.careers);
    const Careers  = data?.data?.main || [];
    const {join_title,join_sub_title,join_desc,join_image } = Careers;
  return (
    <>
      <section className={`${styles.WhiteSugar}`}>
        <div className={`container-fluid ${styles.customContainer}`}>
          <div className="row ">
            <div className={`col-md-8 ${styles.textBlock}`}>
              <h2 className='mb-3'>{join_title}</h2>
              <h3>{join_sub_title}</h3>
              {/* <p>
                At Al Sharkeya Sugar Manufacturing we are more than a sugar
                producer; we are a key player in addressing the growing demand for high-quality sugar
                in Egypt and across the region. Our mission is to leverage our unique strengths to
                maintain our position as a leading supplier, operating sustainably for the benefit of our
                communities.
              </p>
            
              <p>
                By harnessing cutting-edge technology, we produce premium white sugar that meets
                rigorous international standards. Our strategic location provides an ideal climate,
                essential water resources, and unparalleled access to major trade hubs like the Suez
                Canal and the Mediterranean Sea, giving us a distinct competitive edge.
              </p>
              <p>
                Our true strength lies in our people. We are building a future-focused company driven by innovation, collective expertise, and modernized agricultural methods. Join us to be
                part of a team that doesn  just meet market needs—it defines them.
              </p> */}

                <div
              dangerouslySetInnerHTML={{ __html:join_desc }}
              ></div>
            </div>
            <div className={`col-md-4  ${styles.imageBlock}`}>
              <img
                src={join_image}
                alt="White sugar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
