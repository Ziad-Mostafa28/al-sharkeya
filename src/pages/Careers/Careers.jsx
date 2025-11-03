import React from 'react'
import JobOffers from '../../components/Careers/JobOffers/JobOffers'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import FilterJobs from '../../components/Careers/FilterJobs/FilterJobs'
import JobForm from '../../components/Careers/JobForm/JobForm'
import { useSelector } from 'react-redux'

export default function Careers() {
  
    const { data} = useSelector((state) => state.careers);
    const Careers  = data?.data?.main || [];
    const { title,banner } = Careers;
  return (
   <>
    <SecBanner
        title={title}
        image={banner}
    />
   <JobOffers/>
   {/* <FilterJobs/> */}

   <JobForm />
   
   
   </>
  )
}
