import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import OurShareholdersSection from '../../components/About/OurShareholders/OurShareholdersSection'

export default function OurShareholders() {
    return (
        <>
            <SecBanner
                title="Our shareholders"
                subtitle="About us"
                image="/img/aboutus/plant_3.png"
            />

            <OurShareholdersSection />
        </>
    )
}
