
import React from "react";
import { useSelector } from "react-redux";
import SecBanner from "../../components/SharedComponents/SecBanner/SecBanner";
import ProductStyle1 from "../../components/OurProducts/ProductStyle1/ProductStyle1";
import ProductStyle2 from "../../components/OurProducts/ProductStyle2/ProductStyle2";
import SugarProcessing from '../../components/OurProducts/Overview/SugarProcessing/SugarProcessing'


export default function OurProducts() {
  const { data } = useSelector((state) => state.productsOverview);
  const lang = useSelector((state) => state.lang.lang);
  const main = data?.data?.main;
  const products = data?.data?.products || [];

      const isArabic= lang === 'ar';  

  return (
    <>
      <SecBanner
        title={main?.title}
        subtitle= {isArabic?'منتجاتنا':'Products'}
        image={main?.banner}
      />

      {products.map((product, index) => {
        const isEven = index % 2 === 0;
        return isEven ? (
          <ProductStyle1 key={product.id} data={product} />
        ) : (
          <ProductStyle2 key={product.id} data={product} />
        );
      })}

       <SugarProcessing/>
    </>
  );
}

