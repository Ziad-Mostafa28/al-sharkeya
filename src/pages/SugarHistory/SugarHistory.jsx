import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import SugarHistoryComm from '../../components/SugarHistory/SugarHistoryComm'
import { useSelector } from 'react-redux';

export default function SugarHistory() {

  const { data, loading } = useSelector((state) => state.sugarHistory);
     
    if (loading || !data?.data) return null;
  
    const { title,banner } = data.data.main;
  return (
   <>

             <SecBanner
                title={title}
                subtitle="Resources"
                image={banner}
            />

            <SugarHistoryComm/>
   
   </>
  )
}
