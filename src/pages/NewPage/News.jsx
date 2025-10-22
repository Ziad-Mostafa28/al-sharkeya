import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import NewsData from '../../components/News/NewsData/NewsData'

export default function News() {

    //  const { data} = useSelector((state) => state.news);
    // const news = data?.data?.news || [];

    // const { title,banner } = news;
    return (
        <>
            <SecBanner
                title="News"
                subtitle=""
                image="/img/news/Newsbanner.png"
            />

            <NewsData />
        </>
    )
}
