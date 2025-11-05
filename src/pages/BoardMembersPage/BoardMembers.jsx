import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import BoardMembersSections from '../../components/About/BoardMembers/BoardMembersSections'
import { useSelector } from 'react-redux';

export default function BoardMembers() {
    const { data} = useSelector((state) => state.aboutBoardMembers);
    const boardmemebrsImg = data?.data?.main?.board_memebrs_banner;
    return (
        <>
            <SecBanner
                title="Board Members"
                subtitle="About Us"
                image={boardmemebrsImg}
            />

            <BoardMembersSections />
        </>
    )
}
