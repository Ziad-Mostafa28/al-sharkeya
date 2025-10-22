import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FactsSection from '../../components/Resources/Facts/FactsSection'
import { useSelector } from 'react-redux';

export default function FactsPage() {

    const { data, loading } = useSelector((state) => state.sugarFacts);
    if (loading || !data?.data.main) return null;

        const { title,banner } = data.data.main;

    return (
        <>
            <SecBanner
                title={ title}
                subtitle="Resources"
                image={banner}
            />

            <FactsSection />
        </>
    )
}
