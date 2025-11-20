import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import QualitySection from '../../components/Responsibilities/Certifications/Quality/QualitySection'
import PartenarsSection from '../../components/Responsibilities/Certifications/Partenars/PartenarsSection'
import { useSelector } from 'react-redux';

export default function Certifications() {

      const { data} = useSelector((state) => state.certifications);
      const lang = useSelector((state) => state.lang.lang);
    const certifications = data?.data?.main || [];

    const { title,banner } = certifications;
    const isArabic= lang === 'ar';  

    return (
        <>
            <SecBanner
                title={title}
                subtitle={isArabic? 'مسؤولياتنا' : 'Our Responsibilities'}
                image={banner}
            />

            <QualitySection />

            <PartenarsSection />
        </>
    )
}
