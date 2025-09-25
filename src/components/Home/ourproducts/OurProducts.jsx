import React, { useState } from "react";
import styles from "./OurProducts.module.css";
import { Link } from "react-router-dom";
export default function OurProducts() {
  const [activeProduct, setActiveProduct] = useState("white-sugar");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const products = {
    "white-sugar": {
      title: "White Sugar",
      description:
        "White sugar, also known as refined sugar or granulated sugar, is a common sweetener made by extracting and purifying sucrose from sugar beet plants or sugarcane",
      image: "/img/homepage/8.png",
      link: "our-products/white-sugar",
    },
    molasses: {
      title: "Molasses",
      description: `Molasses is a naturally dense, flavorful syrup valued for its distinctive taste, mineral content, and versatility, widely used in foods, beverages, animal feed, and various industrial processes across cultures and generations`,
      image: "/img/homepage/9.png",
      link: "our-products/molasses",
    },
    pellets: {
      title: "Pellets",
      description:
        "It is the remaining cells of the sugar beet roots after extracting the sugar liquid from them. It has a high nutritional value and a palatable taste. It can replace half of the grain requirement in the daily feed of animals.",
      image: "/img/homepage/10.png",
      link: "our-products/pellets",
    },
  };

  const handleProductChange = (productKey) => {
    if (productKey === activeProduct) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveProduct(productKey);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className={`${styles.topSec}`}>
      <div className={`${styles.container}`}>
        {/* Background Image */}
        <img
          src={products[activeProduct].image}
          alt={products[activeProduct].title}
          className={`${styles.backgroundImage} ${isTransitioning ? styles.transitioning : ""
            }`}
        />
        <h1 className={styles.title}>Our Products</h1>
        {/* Content */}
        <div className={styles.content}>
          <div className={styles.header}>
            {/* Navigation Buttons */}
            <div className={styles.navButtons}>
              {Object.entries(products).map(([key, product]) => (
                <button
                  key={key}
                  className={`${styles.navButton} ${activeProduct === key ? styles.active : ""
                    }`}
                  onClick={() => handleProductChange(key)}
                >
                  {product.title}
                </button>
              ))}
            </div>
          </div>

          {/* Product Content */}
          <div
            className={`${styles.productContent} ${isTransitioning ? styles.transitioning : ""
              }`}
          >
            {/* <h2 className={styles.productTitle}>{products[activeProduct].title}</h2> */}
            <p className={styles.productDescription}>
              {products[activeProduct].description}
            </p>
            <Link to={products[activeProduct].link} className={styles.readMore}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
