import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FactsSection from '../../components/Resources/Facts/FactsSection'
import { useSelector } from 'react-redux';

export default function FactsPage() {

    const { data, loading } = useSelector((state) => state.sugarFacts);
                    const lang = useSelector((state) => state.lang.lang);
    
    if (loading || !data?.data.main) return null;

        const { title,banner } = data.data.main;
                const isArabic= lang === 'ar';  


    return (
        <>
            <SecBanner
                title={ title}
                subtitle={isArabic? 'موارد' :'Resources'} 
                image={banner}
            />

            <FactsSection />
        </>
    )
}
