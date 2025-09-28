import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FaqsSection from '../../components/Faqs/FaqsSection'

export default function FaqsPage() {
    return (
        <>
            <SecBanner
                title="Frequently Asked Questions"
                subtitle=""
                image="/img/faqs/image.png"
            />

            <FaqsSection />
        </>
    )
}
