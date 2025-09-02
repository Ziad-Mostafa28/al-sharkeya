import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import NewsDetailsSection from '../../components/News/NewsDetails/NewsDetailsSection'

export default function NewsDetailsPage() {
    return (
        <>
            <SecBanner
                title="News"
                subtitle=""
                image="/img/news/Newsbanner.png"
            />
            <NewsDetailsSection />
        </>
    )
}
