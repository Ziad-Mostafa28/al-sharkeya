import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import ManagementTeamSections from '../../components/About/Managementteam/ManagementTeamSections'
import { useSelector } from 'react-redux';

export default function ManagementTeam() {
    const { data } = useSelector((state) => state.managementTeam);
    const image =data?.data?.main?.managment_team_banner
    const lang = useSelector((state) => state.lang.lang);
    const isArabic= lang === 'ar';  

    
    

    return (
        <>
            <SecBanner
                title={isArabic?'فريق الإدارة': 'Management Team'}
                subtitle={isArabic?'  معلومات عنا':'About Us'}
                image={image}
            />

            <ManagementTeamSections />
        </>
    )
}
