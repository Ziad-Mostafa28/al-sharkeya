import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import ManagementTeamSections from '../../components/About/Managementteam/ManagementTeamSections'

export default function ManagementTeam() {
    return (
        <>
            <SecBanner
                title="Management team"
                subtitle="About us"
                image="/img/aboutus/team.png"
            />

            <ManagementTeamSections />
        </>
    )
}
