import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import BrochureSugar from '../../components/OurProducts/Pellets/SugarBrochure/SugarBrochure'
import SectionAbout from '../../components/OurProducts/Pellets/sectionabout/SectionAbout'
import SugarImage from '../../components/OurProducts/Pellets/SugarImage/SugarImage'
import ChemicalComposition from '../../components/OurProducts/Pellets/ChemicalComposition/ChemicalComposition'
import MultipleMolasses from '../../components/OurProducts/Pellets/MultipleMolasses/MultipleMolasses'
import EconomicEnvironmental from '../../components/OurProducts/Pellets/EconomicEnvironmental/EconomicEnvironmental'

export default function Pellets() {
  return (
   <>
        <SecBanner
           title="Pellets"
           subtitle="Products"
           image="/img/our-products/pellets/banner.png"
        />
        <BrochureSugar/>
        <SectionAbout/>
        <SugarImage/>
        <ChemicalComposition/>
        <MultipleMolasses/>
        <EconomicEnvironmental/>




        

   </>
  )
}
