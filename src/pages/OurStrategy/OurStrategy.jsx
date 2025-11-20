import React from 'react'
import SecondCardBox from '../../components/SharedComponents/CardBox/SecondCardBox'
import OurMission from '../../components/About/OurStrategy/ourmission/OurMission'
import OurVision from '../../components/About/OurStrategy/ourvision/OurVision'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';
import { useSelector } from 'react-redux';

export default function OurStrategy() {

const { data} = useSelector((state) => state.aboutStrategy);
const lang = useSelector((state) => state.lang.lang);
    const isArabic= lang === 'ar';  
  const image = data?.data?.strategy_section.strategy_banner || [];
    return (
        <>
            <SecBanner
                title={isArabic? 'استراتيجيتنا' : 'Our Strategy'}  
                subtitle={isArabic? 'معلومات عنا' : 'About Us'} 
                image={image}
            />
            <SecondCardBox />

            <OurMission />

            <OurVision />

        </>
    )
}
