import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import DownloadBrochureComm from '../../components/DownloadBrochureComm/DownloadBrochureComm'
import { useSelector } from 'react-redux';

export default function DownloadBrochure() {

   const { data} = useSelector((state) => state.downloadBrochure); 
    const { title,banner } = data.data.banner;
  return (
    <>

       <SecBanner
                    title={title}
                    image={banner}
        />
        <DownloadBrochureComm/>
    </>
  )
}
