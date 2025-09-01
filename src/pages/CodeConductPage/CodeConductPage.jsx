import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import CodeSection from '../../components/Responsibilities/Codeconduct/CodeSection/CodeSection'
import CodePartenars from '../../components/Responsibilities/Codeconduct/CodePartenars/CodePartenars'

export default function CodeConductPage() {
    return (
        <>
            <SecBanner
                title="of"
                subtitle="Our responsibilities"
                image="/img/responsibilities/banner7.png"
            />
            <CodeSection />
            <CodePartenars />
        </>
    )
}
