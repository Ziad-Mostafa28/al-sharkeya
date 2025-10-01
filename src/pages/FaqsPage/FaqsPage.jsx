import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FaqsSection from '../../components/Faqs/FaqsSection'
import { useSelector } from 'react-redux';

export default function FaqsPage() {
    const { data } = useSelector((state) => state.faqs);
    console.log(data);
    const image =data?.data?.main?.faq_banner
    return (
        <>
            <SecBanner
                title="Frequently Asked Questions"
                image={image}
            />

            <FaqsSection />
        </>
    )
}
