import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import PrivacyDescription from '../../components/PrivacyPolicyComm/PrivacyDescription/PrivacyDescription'
import { useSelector } from 'react-redux';

export default function PrivacyPolicy() {
    const lang = useSelector((state) => state.lang.lang);
          const isArabic= lang === 'ar';  
  
    return (
        <>

            <SecBanner
                title={isArabic?'سياسة الخصوصية':'Privacy Policy'}
                image="/img/privacypolicy/banner.png"
            />
            <PrivacyDescription />

            

        </>
    )
}
