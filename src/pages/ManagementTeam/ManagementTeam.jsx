import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import ManagementTeamSections from '../../components/About/Managementteam/ManagementTeamSections'
import { useSelector } from 'react-redux';

export default function ManagementTeam() {
    const { data } = useSelector((state) => state.managementTeam);
    const image =data?.data?.main?.managment_team_banner
    

    return (
        <>
            <SecBanner
                title="Management team"
                subtitle="About us"
                image={image}
            />

            <ManagementTeamSections />
        </>
    )
}
