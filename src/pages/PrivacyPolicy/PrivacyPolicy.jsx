import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import PrivacyDescription from '../../components/PrivacyPolicyComm/PrivacyDescription/PrivacyDescription'

export default function PrivacyPolicy() {
    return (
        <>

            <SecBanner
                title="Privacy Policy"
                image="/img/privacypolicy/banner.png"
            />
            <PrivacyDescription />

        </>
    )
}
