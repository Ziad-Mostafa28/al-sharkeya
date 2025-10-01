import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import BrochureSugar from '../../components/OurProducts/Molasses/SugarBrochure/SugarBrochure'
import VideoSection from '../../components/OurProducts/Molasses/video/VideoSection'
import MolassesSection from '../../components/OurProducts/Molasses/MolassesSection/MolassesSection'
import ChemicalComposition from '../../components/OurProducts/Molasses/ChemicalComposition/ChemicalComposition'
import MultipleMolasses from '../../components/OurProducts/Molasses/MultipleMolasses/MultipleMolasses'
import EconomicEnvironmental from '../../components/OurProducts/Molasses/EconomicEnvironmental/EconomicEnvironmental'

export default function Molasses() {
  return (
    <>
        <SecBanner
                title="Molasses"
                subtitle="Products"
                image="/img/our-products/molasses/molasses.png"
        /> 

        <BrochureSugar/>
        <VideoSection/>
        {/* <MolassesSection/> */}
        <ChemicalComposition/>
        <MultipleMolasses/>
        <EconomicEnvironmental/>


    
    
    </>
  )
}
