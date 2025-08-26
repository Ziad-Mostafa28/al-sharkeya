import React from 'react'
import WhiteSugar from '../../components/OurProducts/Overview/WhiteSugar/WhiteSugar'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import Molasses from '../../components/OurProducts/Overview/Molasses/Molasses'
import SugarProcessing from '../../components/OurProducts/Overview/SugarProcessing/SugarProcessing'

export default function OurProducts() {
  return (
    <>
      <SecBanner
        title="Overview"
        subtitle="Products"
        image="/img/our-products/banner.png"
      />    
      
      <WhiteSugar/>

      <Molasses/>

      <WhiteSugar/>
      <SugarProcessing/>

    </>
  )
}
