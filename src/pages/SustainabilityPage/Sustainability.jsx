import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import Sustainability from '../../components/Responsibilities/Sustainability/SustainabilitySection/Sustainability'
import SustainabilityDetails from '../../components/Responsibilities/Sustainability/SustainabilityDetails/SustainabilityDetails'
import SustainabilityBox from '../../components/Responsibilities/Sustainability/SustainabilityBox/SustainabilityBox'
import { useSelector } from 'react-redux'

export default function SustainabilityPage() {

    const { data, loading } = useSelector((state) => state.sustainability); 
    const lang = useSelector((state) => state.lang.lang);
    
    if (loading || !data?.data.main) return null;
    const  title = data.data.main.title;
    const  banner = data.data.main.banner;
    const isArabic= lang === 'ar';  


    return (
        <>
            <SecBanner
                title={title}
                subtitle={isArabic? 'مسؤولياتنا' : 'Our Responsibilities'}
                image={banner}
            />
            <Sustainability />
            <SustainabilityDetails />

            <SustainabilityBox />
        </>
    )
}
