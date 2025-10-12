import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import Sustainability from '../../components/Responsibilities/Sustainability/SustainabilitySection/Sustainability'
import SustainabilityDetails from '../../components/Responsibilities/Sustainability/SustainabilityDetails/SustainabilityDetails'
import SustainabilityBox from '../../components/Responsibilities/Sustainability/SustainabilityBox/SustainabilityBox'

export default function SustainabilityPage() {
    return (
        <>
            <SecBanner
                title="Sustainability"
                subtitle="Our Responsibilities"
                image="/img/responsibilities/banner5.png"
            />
            <Sustainability />
            <SustainabilityDetails />

            <SustainabilityBox />
        </>
    )
}
