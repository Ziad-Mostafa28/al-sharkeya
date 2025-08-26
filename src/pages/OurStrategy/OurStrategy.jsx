import React from 'react'
import CardBox from '../../components/SharedComponents/CardBox/CardBox'
import OurMission from '../../components/About/OurStrategy/ourmission/OurMission'
import OurVision from '../../components/About/OurStrategy/ourvision/OurVision'

export default function OurStrategy() {
    const cardBoxData = {
        image: "/img/aboutus/cardbox2.png",
        paragraphs: [
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E 's strategy is fundamentally geared towards meeting market needs by reduction the wide disparity between supply and demand, both domestically and regionally.",
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E aims to acquire this escalating aspect of this growing market, whose potential is not limited to Egypt only.",
            "With favorable free-trade agreements between Egypt, North Africa, East Africa and Arab countries already in place to support the export of white sugar and its byproducts, the export potential for Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E remains very high.",
            "Further advantages include wide governmental support as sugar is a staple in the food production industry, in addition to the availability of land for growth in the cultivation of sugar beets, which require relatively minimal water consumption.",
            "Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E plans to leverage its competitive advantages with these opportunities to boost the production capacity of the local and regional markets while attempting to supply net importers, and it plans to do this in a sustainable manner which ensures the continued well-being of the local community.",
        ]
    };
    const missionData = {
        title: "Our Mission",
        description: "It plans to achieve this by",
        items: [
            {
                icon: "/img/aboutus/icon.png",
                text: "Building a factory with the latest technology available using the latest means to produce the highest quality white sugar that meets international standards."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Leveraging the strength of its partners, whose collective experience offers Al Sharkeya Sugar Manufacturing (AL Nouran) S.A.E a unique insight into sugar manufacturing, agriculture and access to trade partners and retail customers, in addition to the sourcing of raw materials."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Further expanding its growth potential by mechanizing beet cultivation and adopting new applications."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Fully capitalizing on the facility's geographic location, which offers an ideal temperate climate, access to fresh-water resources and a well-developed support infrastructure that includes easy access to transportation arteries and utilities as well as proximity to logistical and export hubs of the Suez Canal and Mediterranean Sea."
            },
            {
                icon: "/img/aboutus/icon.png",
                text: "Developing access to regional and international markets."
            }
        ]
    };
    return (
        <>
            <CardBox data={cardBoxData} />

            <OurMission data={missionData} />

            <OurVision />

        </>
    )
}
