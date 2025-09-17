import React from 'react'
import SugarBrochure from '../../components/OurProducts/WhiteSugar/SugarBrochure/SugarBrochure'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import SugarImage from '../../components/OurProducts/WhiteSugar/SugarImage/SugarImage'
import ProductsLogo from '../../components/OurProducts/WhiteSugar/ProductsLogo/ProductsLogo'
import PremiumWhite from '../../components/OurProducts/WhiteSugar/PremiumWhite/PremiumWhite'

export default function WhiteSugar() {
  return (
    <>
       <SecBanner
        title="White sugar"
        subtitle="Products"
        image="/img/our-products/white-sugar/sugar.png"
      />  
      <SugarBrochure/>
      <SugarImage/>
      <PremiumWhite/>
      <ProductsLogo/>
    
    </>

  )
}
