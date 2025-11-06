import React, { useState, useEffect } from "react";
import styles from "./OurProducts.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OurProducts() {
  const { data } = useSelector((state) => state.homeWithOrdering);

  const productsList =
    data?.data?.sections?.find((section) => section.products)?.products?.list || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const staticLinks = [
    "our-products/white-sugar",
    "our-products/molasses",
    "our-products/pellets",
  ];

  useEffect(() => {
    if (productsList.length > 0 && activeIndex >= productsList.length) {
      setActiveIndex(0);
    }
  }, [productsList, activeIndex]);

  if (!productsList || productsList.length === 0) {
    return null;
  }

  const handleProductChange = (index) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const activeProduct = productsList[activeIndex];

  return (
    <section className={styles.topSec}>
      <div className={styles.container}>
        <img
          src={activeProduct.image}
          alt={activeProduct.title}
          className={`${styles.backgroundImage} ${
            isTransitioning ? styles.transitioning : ""
          }`}
        />

        <h1 className={styles.title}>Our Products</h1>

        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.navButtons}>
              {productsList.map((product, index) => (
                <button
                  key={product.id}
                  className={`${styles.navButton} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => handleProductChange(index)}
                >
                  {product.title}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`${styles.productContent} ${
              isTransitioning ? styles.transitioning : ""
            }`}
          >
            <div
              className={styles.productDescription}
              dangerouslySetInnerHTML={{ __html: activeProduct.description }}
            ></div>

            <Link
              to={staticLinks[activeIndex] || "#"}
              className={styles.readMore}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
