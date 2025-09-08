import React, { useState } from "react";
import styles from "./OurProducts.module.css";
export default function OurProducts() {
  const [activeProduct, setActiveProduct] = useState("white-sugar");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const products = {
    "white-sugar": {
      title: "White Sugar",
      description:
        "White sugar, also called table sugar, granulated sugar, or regular sugar, is a commonly used type of sugar, made either of beet sugar or cane sugar, which has undergone a refining process. It is nearly pure sucrose.",
      image: "/img/homepage/8.png",
    },
    molasses: {
      title: "Molasses",
      description: `The syrup separated off during the final crystallization step is known as molasses Molasses is a valuable ingredient for the baking yeast and animal feed industry as well as for the production of alcohol.`,
      image: "/img/homepage/9.png",
    },
    pellets: {
      title: "Pellets",
      description:
        "It is the remaining cells of the sugar beet roots after extracting the sugar liquid from them. It has a high nutritional value and a palatable taste. It can replace half of the grain requirement in the daily feed of animals.",
      image: "/img/homepage/10.png",
    },
  };

  const handleProductChange = (productKey) => {
    if (productKey === activeProduct) return;

    setIsTransitioning(true);

    // تأخير لتطبيق التأثير
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
          className={`${styles.backgroundImage} ${
            isTransitioning ? styles.transitioning : ""
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
                  className={`${styles.navButton} ${
                    activeProduct === key ? styles.active : ""
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
            className={`${styles.productContent} ${
              isTransitioning ? styles.transitioning : ""
            }`}
          >
            {/* <h2 className={styles.productTitle}>{products[activeProduct].title}</h2> */}
            <p className={styles.productDescription}>
              {products[activeProduct].description}
            </p>
            <a href="#" className={styles.readMore}>
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
