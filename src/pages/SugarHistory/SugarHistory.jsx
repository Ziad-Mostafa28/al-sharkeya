import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import SugarHistoryComm from '../../components/SugarHistory/SugarHistoryComm'

export default function SugarHistory() {
  return (
   <>

             <SecBanner
                title="Sugar History"
                subtitle="Resources"
                image="/img/sugarhistory/banner.png"
            />

            <SugarHistoryComm/>
   
   </>
  )
}
