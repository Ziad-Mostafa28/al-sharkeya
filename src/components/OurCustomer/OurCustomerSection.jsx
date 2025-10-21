import React, { useState, useEffect } from 'react'
import styles from "./OurCustomerSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { useSelector } from 'react-redux';

export default function OurCustomerSection() {
    const { data} = useSelector((state) => state.customers);
    const categories = data?.data.customers || [];

    const [activeFilter, setActiveFilter] = useState("");

    useEffect(() => {
        if (categories.length > 0 && !activeFilter) {
            setActiveFilter(categories[0].name);
        }
    }, [categories, activeFilter]);


    const filters = categories.map(cat => ({
        name: cat.name,
        img: cat.image, 
    }));

    const activeCategory = categories.find(cat => cat.name === activeFilter);
    const activeCustomers = activeCategory?.customers || [];

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
                                768: { slidesPerView: 3 },
                                576: { slidesPerView: 2 },
                                0: { slidesPerView: 1 },
                            }}
                        >
                            {filters.map((filter) => (
                                <SwiperSlide key={filter.name}>
                                    <div
                                        className={`${styles.slide_box}`}
                                        style={{
                                            opacity: activeFilter === filter.name ? 1 : 0.5,
                                            cursor: "pointer"
                                        }}
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
                        {activeCustomers.map(cust => (
                            <div key={cust.id} className="col-6 col-sm-4 col-md-3 mb-4">
                                <div className={`${styles.image_customer}`}>
                                    <img src={cust.image} alt={cust.name} />
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
