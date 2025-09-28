import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import ContactUsForm from '../../components/ContactUs/ContactUsForm/ContactUsForm'
import BecomeSupplier from '../../components/ContactUs/BecomeSupplier/BecomeSupplier'
import VisitUs from '../../components/ContactUs/VisitUs/VisitUs'

export default function ContactUs() {
  return (
    <>
        <SecBanner
          title="Contact Us"
          image="/img/aboutus/HEader3.png"
        />
        <ContactUsForm/>
        <BecomeSupplier/>
        <VisitUs/>
    
    </>
  )
}
