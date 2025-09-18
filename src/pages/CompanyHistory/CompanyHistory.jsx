import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import CompanyHistorySlider from '../../components/About/CompanyHistory/CompanyHistorySlider'

export default function CompanyHistory() {
    return (
        <>
            <SecBanner
                title="Company history"
                subtitle="About us"
                image="/img/aboutus/HEader3.png"
            />

            <CompanyHistorySlider />
        </>
    )
}
