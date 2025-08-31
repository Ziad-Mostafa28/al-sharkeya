import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import QualitySection from '../../components/Responsibilities/Certifications/Quality/QualitySection'
import PartenarsSection from '../../components/Responsibilities/Certifications/Partenars/PartenarsSection'

export default function Certifications() {
    return (
        <>
            <SecBanner
                title="Certifications"
                subtitle="Our responsibilities"
                image="/img/responsibilities/banner1.png"
            />

            <QualitySection />

            <PartenarsSection />
        </>
    )
}
