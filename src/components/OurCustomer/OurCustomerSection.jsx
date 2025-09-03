import React, { useState } from 'react'
import styles from "./OurCustomerSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

export default function OurCustomerSection() {
    const [activeFilter, setActiveFilter] = useState("White sugar");

    const filters = [
        { name: "White sugar", img: "/img/ourcustomer/3.png" },
        { name: "Molasses", img: "/img/ourcustomer/2.png" },
        { name: "Pellets", img: "/img/ourcustomer/1.png" },
    ];

    // هنا 3 object / map للكاستومرز
    const customersByType = {
        "White sugar": [
            { id: 1, name: "Aujan", img: "/img/ourcustomer/4.png" },
            { id: 2, name: "Cocacola", img: "/img/ourcustomer/5.png" },
            { id: 3, name: "Edita", img: "/img/ourcustomer/6.png" },
            { id: 4, name: "Juhayna", img: "/img/ourcustomer/7.png" },
            { id: 5, name: "Pepsi", img: "/img/ourcustomer/8.png" },
            { id: 6, name: "Chipsy", img: "/img/ourcustomer/9.png" },
            { id: 7, name: "Beyti", img: "/img/ourcustomer/10.png" },
            { id: 8, name: "AlMarrai", img: "/img/ourcustomer/11.png" },

            { id: 9, name: "AL Doha", img: "/img/ourcustomer/12.png" },
            { id: 10, name: "Delta Company for sweets and food", img: "/img/ourcustomer/13.png" },
            { id: 11, name: "Egyptian European Company - Chevy Mix", img: "/img/ourcustomer/14.png" },
            { id: 12, name: "Egyptian Turkish co for sweets -Elvan", img: "/img/ourcustomer/15.png" },
            { id: 13, name: "Natura Agro Trade", img: "/img/ourcustomer/16.png" },
            { id: 14, name: "Pladis Foods Egypt for Food Industries", img: "/img/ourcustomer/17.png" },
            { id: 15, name: "SANA Foods - El Saidy", img: "/img/ourcustomer/18.png" },
            { id: 16, name: "Al Hamd Soft drinks- C Porty", img: "/img/ourcustomer/19.png" },
            { id: 17, name: "Egyption Canneing Co. - Best", img: "/img/ourcustomer/20.png" },
            { id: 18, name: "Management Gate", img: "/img/ourcustomer/21.png" },
            { id: 19, name: "Sudan Coro for Juices and Beverages", img: "/img/ourcustomer/22.png" },
            { id: 20, name: "Amriya Pharma Industries", img: "/img/ourcustomer/23.png" },
            { id: 21, name: "El Gomhoreya Pharm Chem", img: "/img/ourcustomer/24.png" },
            { id: 22, name: "Arab Otsuka Nutraceuticals Co., S.A.E.", img: "/img/ourcustomer/25.png" },
            { id: 23, name: "Opella healthcare Egypt", img: "/img/ourcustomer/26.png" },
            { id: 24, name: "Pharco B International Co.", img: "/img/ourcustomer/27.png" },
            { id: 25, name: "Islamic Pharmaceuticals, Chemicals & Supplies -Pharco", img: "/img/ourcustomer/28.png" },
            { id: 26, name: "Sanofi Egypt Company", img: "/img/ourcustomer/29.png" },
            { id: 27, name: "EL- Awael  for food industries", img: "/img/ourcustomer/30.png" },
            { id: 28, name: "Friday Ice Cream", img: "/img/ourcustomer/31.png" },
            { id: 29, name: "Gomaa Gelato & Ice Cream Industries", img: "/img/ourcustomer/32.png" },
            { id: 30, name: "Hops Ice cream", img: "/img/ourcustomer/33.png" },
            { id: 31, name: "Smoochy Ice Cream", img: "/img/ourcustomer/34.png" },
        ],
        "Molasses": [
            { id: 32, name: "Angel Yeast Egypt", img: "/img/ourcustomer/35.png" },
            { id: 33, name: "ED&F Man", img: "/img/ourcustomer/36.png" },
            { id: 34, name: "KMT for Integrated Industries", img: "/img/ourcustomer/37.png" },
            { id: 35, name: "Juhayna", img: "/img/ourcustomer/38.png" },
            { id: 36, name: "Phaga industries", img: "/img/ourcustomer/39.png" },
        ],
        "Pellets": [
            { id: 37, name: "Agremax General Trading", img: "/img/ourcustomer/40.png" },
            { id: 38, name: "AL Dahra Trading Egypt", img: "/img/ourcustomer/41.png" },
            { id: 39, name: "Dina Farms", img: "/img/ourcustomer/42.png" },
            { id: 40, name: "ED&F Man", img: "/img/ourcustomer/43.png" },
            { id: 41, name: "Wakalex", img: "/img/ourcustomer/44.png" },

        ],
    };

    return (
        <section className={`${styles.OurCustomerSection} pt-5`}>
            <div className="container">
                <div className={`${styles.box}`}>
                    <h2>Filter by</h2>
                    <div className={`${styles.slider}`}>
                        <Swiper
                            className="mySwiper"
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                768: { 
                                    slidesPerView: 3,
                                },
                                576: { 
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {filters.map((filter) => (
                                <SwiperSlide key={filter.name}>
                                    <div
                                        className={`${styles.slide_box}`}
                                        style={{ opacity: activeFilter === filter.name ? 1 : 0.5, cursor: "pointer" }}
                                        onClick={() => setActiveFilter(filter.name)}
                                    >
                                        <div className={`${styles.slide_box_image}`}>
                                            <img src={filter.img} alt={filter.name} />
                                        </div>
                                        <h3>{filter.name}</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className={`${styles.customer_box} my-5`}>
                <h2 className={`${styles.title}`}>Customers</h2>

                <div className="container">
                    <div className="row">
                        {customersByType[activeFilter]?.map(cust => (
                            <div key={cust.id} className="col-6 col-sm-4 col-md-3 mb-4">
                                <div className={`${styles.image_customer}`}>
                                    <img src={cust.img} alt={cust.name} />
                                </div>
                                <h3 className={`${styles.Subtitle} mt-3`}>{cust.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
