import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FactsSection from '../../components/Resources/Facts/FactsSection'

export default function FactsPage() {
    return (
        <>
            <SecBanner
                title="Facts about sugar"
                subtitle="Resources"
                image="/img/faqs/image.png"
            />

            <FactsSection />
        </>
    )
}
