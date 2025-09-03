import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import TermsDescription from '../../components/TermsOfServiceComm/TermsDescription/TermsDescription'

export default function TermsOfService() {
  return (
   <>

             <SecBanner
                   title="Terms of Service"
                   image="/img/termsofservice/banner.png"
               />
               <TermsDescription/>
   </>
  )
}
