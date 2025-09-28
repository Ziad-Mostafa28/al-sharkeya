import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FactsSection from '../../components/Resources/Facts/FactsSection'

export default function FactsPage() {
    return (
        <>
            <SecBanner
                title="Facts About Sugar"
                subtitle="Resources"
                image="/img/recipes/image6.png"
            />

            <FactsSection />
        </>
    )
}
