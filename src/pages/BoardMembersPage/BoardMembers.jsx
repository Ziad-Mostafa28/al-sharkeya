import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import BoardMembersSections from '../../components/About/BoardMembers/BoardMembersSections'
import { useSelector } from 'react-redux';

export default function BoardMembers() {
    const { data} = useSelector((state) => state.aboutBoardMembers);
        const lang = useSelector((state) => state.lang.lang);
    
    const boardmemebrsImg = data?.data?.main?.board_memebrs_banner;
       const isArabic= lang === 'ar';  

    return (
        <>
            <SecBanner
                title={isArabic?'أعضاء مجلس الإدارة':'Board Members'}
                subtitle={isArabic?'  معلومات عنا':'About Us'}
                image={boardmemebrsImg}
            />

            <BoardMembersSections />
        </>
    )
}
