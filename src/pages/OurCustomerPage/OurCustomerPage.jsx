import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import OurCustomerSection from '../../components/OurCustomer/OurCustomerSection'

export default function OurCustomerPage() {
    return (
        <>
            <SecBanner
                title="Our customers"
                subtitle=""
                image="/img/ourcustomer/sa.png"
            />

            <OurCustomerSection />
        </>
    )
}
