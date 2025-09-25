import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'

export default function Verify() {
    return (
        <>
            <SecBanner
                title="Verify"
                subtitle="Verify"
                image="/img/aboutus/team.png"
            />

            <div className="flex justify-center my-12 mt-5">
                <iframe
                    src="https://www.sharkeyasugar.com/verify/?certID=QMZIX6-161225-IP0JVR-230415"
                    width="100%"
                    height="900"
                    style={{ border: "none" }}
                    title="Verification Page"
                ></iframe>
            </div>
        </>
    )
}
