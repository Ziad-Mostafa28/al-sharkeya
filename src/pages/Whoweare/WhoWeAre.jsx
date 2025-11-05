import React from 'react'
import CardBox from '../../components/SharedComponents/CardBox/CardBox'
import Activities from '../../components/About/WhoWeAre/activities/Activities'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';
import { useSelector } from 'react-redux';

export default function WhoWeAre() {

    const {data} = useSelector((state) => state.aboutWhoWeAre);
    const whoWeAreImg = data?.data?.main?.who_we_are_banner;

    return (
        <>
            <SecBanner
                title="Who We Are"
                subtitle="About Us"
                image={whoWeAreImg}
            />
            <CardBox />
            <Activities />
        </>
    )
}
