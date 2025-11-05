import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import OurShareholdersSection from '../../components/About/OurShareholders/OurShareholdersSection'
import { useSelector } from 'react-redux';

export default function OurShareholders() {

     const { data} = useSelector((state) => state.aboutShareholders);
  const shareholdersImg = data?.data?.main?.shareholders_banner;

    return (
        <>
            <SecBanner
                title="Our Shareholders"
                subtitle="About Us"
                image={shareholdersImg}
            />

            <OurShareholdersSection />
        </>
    )
}
