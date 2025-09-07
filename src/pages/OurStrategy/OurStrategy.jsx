import React from 'react'
import SecondCardBox from '../../components/SharedComponents/CardBox/SecondCardBox'
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
            <SecondCardBox />

            <OurMission />

            <OurVision />

        </>
    )
}
