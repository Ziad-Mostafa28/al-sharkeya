import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FaqsSection from '../../components/Faqs/FaqsSection'
import { useSelector } from 'react-redux';

export default function FaqsPage() {
    const { data } = useSelector((state) => state.faqs);
    const image =data?.data?.main?.faq_banner
    const title =data?.data?.main?.faq_title



    
    return (
        <>
            <SecBanner
                title={title}
                image={image}
            />

            <FaqsSection />
        </>
    )
}
