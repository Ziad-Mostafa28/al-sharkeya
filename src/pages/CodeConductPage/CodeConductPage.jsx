import React from 'react'
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner'
import CodeSection from '../../components/Responsibilities/Codeconduct/CodeSection/CodeSection'
import CodePartenars from '../../components/Responsibilities/Codeconduct/CodePartenars/CodePartenars'
import { useSelector } from 'react-redux';

export default function CodeConductPage() {
    const { data, loading } = useSelector((state) => state.codeOfConduct); 
              const lang = useSelector((state) => state.lang.lang);
    
    if (loading || !data?.data.main) return null;
    const  title = data.data.main.title;
    const  banner = data.data.main.banner;
    const isArabic= lang === 'ar';  

    return (
        <>
            <SecBanner
                title={title}
                subtitle={isArabic? 'مسؤولياتنا' : 'Our Responsibilities'}
                image={banner}
            />
            <CodeSection />
            <CodePartenars />
        </>
    )
}
