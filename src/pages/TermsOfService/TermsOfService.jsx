import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import TermsDescription from '../../components/TermsOfServiceComm/TermsDescription/TermsDescription'
import { useSelector } from 'react-redux';

export default function TermsOfService() {
   const lang = useSelector((state) => state.lang.lang);
          const isArabic= lang === 'ar';  
  return (
   <>

             <SecBanner
                  title= {isArabic?' شروط الخدمة':'Terms of Service'}
                   image="/img/termsofservice/banner.png"
               />
               <TermsDescription/>
   </>
  )
}
