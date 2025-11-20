import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import SugarHistoryComm from '../../components/SugarHistory/SugarHistoryComm'
import { useSelector } from 'react-redux';

export default function SugarHistory() {

  const { data, loading } = useSelector((state) => state.sugarHistory);
                const lang = useSelector((state) => state.lang.lang);
  
     
    if (loading || !data?.data) return null;
  
    const { title,banner } = data.data.main;
        const isArabic= lang === 'ar';  

  return (
   <>

             <SecBanner
                title={title}
                subtitle={isArabic? 'موارد' :'Resources'} 
                image={banner}
            />

            <SugarHistoryComm/>
   
   </>
  )
}
