// import React from 'react'
// import WhiteSugar from '../../components/OurProducts/Overview/WhiteSugar/WhiteSugar'
// import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
// import Molasses from '../../components/OurProducts/Overview/Molasses/Molasses'
// import SugarProcessing from '../../components/OurProducts/Overview/SugarProcessing/SugarProcessing'
// import Pelletts from '../../components/OurProducts/Overview/Pelletts/Pelletts'
// import { useSelector } from 'react-redux'

// export default function OurProducts() {

//     const { data} = useSelector((state) => state.productsOverview);
//     const productsOverview  = data?.data?.main || [];
//     const {title,banner} = productsOverview ;

//   return (
//     <>
//       <SecBanner
//         title={title}
//         subtitle="Products"
//         image={banner}
//       />    
      
//       <WhiteSugar/>

//       <Molasses/>

//       <Pelletts/>
//       <SugarProcessing/>

//     </>
//   )
// }


// pages/OurProducts/OurProducts.jsx
import React from "react";
import { useSelector } from "react-redux";
import SecBanner from "../../components/SharedComponents/SecBanner/SecBanner";
import ProductStyle1 from "../../components/OurProducts/ProductStyle1/ProductStyle1";
import ProductStyle2 from "../../components/OurProducts/ProductStyle2/ProductStyle2";

export default function OurProducts() {
  const { data } = useSelector((state) => state.productsOverview);
  const main = data?.data?.main;
  const products = data?.data?.products || [];

  return (
    <>
      <SecBanner
        title={main?.title}
        subtitle="Products"
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
    </>
  );
}

