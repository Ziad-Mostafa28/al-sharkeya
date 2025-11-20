import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import ContactUsForm from '../../components/ContactUs/ContactUsForm/ContactUsForm'
import BecomeSupplier from '../../components/ContactUs/BecomeSupplier/BecomeSupplier'
import VisitUs from '../../components/ContactUs/VisitUs/VisitUs'
import { useSelector } from 'react-redux'

export default function ContactUs() {
   const lang = useSelector((state) => state.lang.lang);
          const isArabic= lang === 'ar';  
  
  return (
    <>
        <SecBanner
          title= {isArabic?'اتصل بنا':'Contact Us'}
          image="/img/aboutus/HEader3.png"
        />
        <ContactUsForm/>
        <BecomeSupplier/>
        <VisitUs/>
    
    </>
  )
}
