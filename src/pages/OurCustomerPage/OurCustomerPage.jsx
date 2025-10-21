import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import OurCustomerSection from '../../components/OurCustomer/OurCustomerSection'
import { useSelector } from 'react-redux';

export default function OurCustomerPage() {

    const { data } = useSelector((state) => state.customers);
    const categories = data?.data.main || [];
    const { title,banner } = categories;

    return (
        <>
            <SecBanner
                title={title}
                subtitle=""
                image={banner}
            />

            <OurCustomerSection />
        </>
    )
}
