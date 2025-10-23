import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import NewsData from '../../components/News/NewsData/NewsData'
import { useSelector } from 'react-redux';

export default function News() {

     const { data} = useSelector((state) => state.news);
    const news = data?.data?.main || [];

    const { title,image } = news;
    return (
        <>
            <SecBanner
                title={title}
                subtitle=""
                image={image}
            />
            <NewsData />
        </>
    )
}
