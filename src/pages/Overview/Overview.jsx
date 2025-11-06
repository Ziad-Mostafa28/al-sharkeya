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


import React from "react";
import { useSelector } from "react-redux";
import SecBanner from "../../components/SharedComponents/SecBanner/SecBanner";
import WhiteSugar from "../../components/OurProducts/Overview/WhiteSugar/WhiteSugar";
import Molasses from "../../components/OurProducts/Overview/Molasses/Molasses";
import Pelletts from "../../components/OurProducts/Overview/Pelletts/Pelletts";
import SugarProcessing from "../../components/OurProducts/Overview/SugarProcessing/SugarProcessing";

export default function OurProducts() {
  const { data } = useSelector((state) => state.productsOverview);

  const main = data?.data?.main;
  const products = data?.data?.products || [];

  const whiteSugar = products.find((item) => item.name === "White Sugar");
  const molasses = products.find((item) => item.name === "Molasses");
  const pellets = products.find((item) => item.name === "Pellets");

  return (
    <>
      <SecBanner
        title={main?.title}
        subtitle="Products"
        image={main?.banner}
      />

      {whiteSugar && <WhiteSugar data={whiteSugar} />}
      {molasses && <Molasses data={molasses} />}
      {pellets && <Pelletts data={pellets} />}

      {<SugarProcessing data={main} />}
    </>
  );
}
