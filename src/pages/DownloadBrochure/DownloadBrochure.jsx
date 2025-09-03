import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import DownloadBrochureComm from '../../components/DownloadBrochureComm/DownloadBrochureComm'

export default function DownloadBrochure() {
  return (
    <>

       <SecBanner
                    title="Download Brochure"
                    image="/img/downloadbrochure/banner.png"
        />
        <DownloadBrochureComm/>
    </>
  )
}
