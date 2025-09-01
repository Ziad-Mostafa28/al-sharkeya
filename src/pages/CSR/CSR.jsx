import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import CsrSection from '../../components/Responsibilities/Csr/CsrSection/CsrSection'

export default function CSR() {
  return (
    <>
        <SecBanner
                title="CSR"
                subtitle="Our responsibilities"
                image="/img/responsibilities/banner6.png"
            />

            <CsrSection />
    </>
  )
}
