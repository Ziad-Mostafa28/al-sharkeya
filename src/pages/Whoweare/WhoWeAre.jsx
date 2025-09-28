import React from 'react'
import CardBox from '../../components/SharedComponents/CardBox/CardBox'
import Activities from '../../components/About/WhoWeAre/activities/Activities'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';

export default function WhoWeAre() {

    return (
        <>
            <SecBanner
                title="Who We Are"
                subtitle="About Us"
                image="/img/aboutus/HEader2.png"
            />

            <CardBox />


            <Activities />
        </>
    )
}
