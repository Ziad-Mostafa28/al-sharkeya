import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import OurShareholdersSection from '../../components/About/OurShareholders/OurShareholdersSection'
import { useSelector } from 'react-redux';

export default function OurShareholders() {

     const { data} = useSelector((state) => state.aboutShareholders);
    const lang = useSelector((state) => state.lang.lang);
     
  const shareholdersImg = data?.data?.main?.shareholders_banner;
   const isArabic= lang === 'ar';  


    return (
        <>
            <SecBanner
                title={isArabic?'المساهمين لدينا':'Our Shareholders'} 
                subtitle={isArabic?' معلومات عنا':'About Us'} 
                image={shareholdersImg}
            />

            <OurShareholdersSection />
        </>
    )
}
