import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import Sustainability from '../../components/Responsibilities/Sustainability/SustainabilitySection/Sustainability'
import SustainabilityDetails from '../../components/Responsibilities/Sustainability/SustainabilityDetails/SustainabilityDetails'
import SustainabilityBox from '../../components/Responsibilities/Sustainability/SustainabilityBox/SustainabilityBox'
import { useSelector } from 'react-redux'

export default function SustainabilityPage() {

    const { data, loading } = useSelector((state) => state.sustainability); 
    if (loading || !data?.data.main) return null;
    const { title,banner } = data.data.main;
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
