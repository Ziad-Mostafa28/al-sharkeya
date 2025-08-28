import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import BoardMembersSections from '../../components/About/BoardMembers/BoardMembersSections'

export default function BoardMembers() {
    return (
        <>
            <SecBanner
                title="Board Members"
                subtitle="About us"
                image="/img/aboutus/HEader25.png"
            />

            <BoardMembersSections />
        </>
    )
}
