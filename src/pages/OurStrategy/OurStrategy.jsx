import React from 'react'
import CardBox from '../../components/SharedComponents/CardBox/CardBox'
import OurMission from '../../components/About/OurStrategy/ourmission/OurMission'
import OurVision from '../../components/About/OurStrategy/ourvision/OurVision'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';

export default function OurStrategy() {
    
    
    return (
        <>
            <SecBanner
                title="Our strategy"
                subtitle="About us"
                image="/img/aboutus/HEader.png"
            />
            <CardBox />

            <OurMission />

            <OurVision />

        </>
    )
}
