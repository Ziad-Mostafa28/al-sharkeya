import React from 'react'
import JobOffers from '../../components/Careers/JobOffers/JobOffers'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FilterJobs from '../../components/Careers/FilterJobs/FilterJobs'

export default function Careers() {
  return (
   <>
    <SecBanner
        title="Careers"
        image="/img/careers/banner.png"
    />
   <JobOffers/>
   <FilterJobs/>
   
   
   </>
  )
}
