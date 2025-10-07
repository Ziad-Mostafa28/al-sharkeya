import React from 'react'
import SecondCardBox from '../../components/SharedComponents/CardBox/SecondCardBox'
import OurMission from '../../components/About/OurStrategy/ourmission/OurMission'
import OurVision from '../../components/About/OurStrategy/ourvision/OurVision'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';
import { useSelector } from 'react-redux';

export default function OurStrategy() {

const { data} = useSelector((state) => state.aboutStrategy);
  const image = data?.data?.strategy_section.strategy_banner || [];
    return (
        <>
            <SecBanner
                title="Our Strategy"
                subtitle="About Us"
                image={image}
            />
            <SecondCardBox />

            <OurMission />

            <OurVision />

        </>
    )
}
