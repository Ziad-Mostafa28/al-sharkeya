import React from 'react'
import CardBox from '../../components/SharedComponents/CardBox/CardBox'
import Activities from '../../components/About/WhoWeAre/activities/Activities'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';

export default function WhoWeAre() {
    const cardBoxData = {
        image: "/img/aboutus/cardbox.png",
        paragraphs: [
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E 's strategy is fundamentally geared towards meeting market needs by reduction the wide disparity between supply and demand, both domestically and regionally.",
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E aims to acquire this escalating aspect of this growing market, whose potential is not limited to Egypt only.",
        ]
    };
    return (
        <>
            <SecBanner
                title="Who we are"
                subtitle="About us"
                image="/img/aboutus/HEader2.png"
            />

            <CardBox data={cardBoxData} />


            <Activities />
        </>
    )
}
