import { useSelector } from "react-redux";
import HomeBanner from "../../components/Home/banner/Homebanner";
import ContactUs from "../../components/Home/contact/ContactUs";
import OurCustomers from "../../components/Home/customer/OurCustomers";
import LatestNews from "../../components/Home/latestnews/LatestNews";
import OurProducts from "../../components/Home/ourproducts/OurProducts";
import SectionAbout from "../../components/Home/sectionabout/SectionAbout";
import VideoSection from "../../components/Home/video/VideoSection";
import LoadingOverlay from "../../layouts/LoadingOverlay/LoadingOverlay";

export default function Home() {
  const { data, loading, error } = useSelector(
    (state) => state.homeWithOrdering
  );

  if (loading) {
    return <LoadingOverlay />;
  }

  if (error) {
    console.error(error);
  }

  const sections = data?.data?.sections || [];

  const componentsMap = {
    products: <OurProducts />,
    about: <SectionAbout />,
    latest_news: <LatestNews />,
    our_customers: <OurCustomers />,
    contact_us: <ContactUs />,
  };

  const orderedSections = sections
    .map((section) => {
      const key = Object.keys(section)[0];
      return { key, ...section[key] };
    })
    .filter((section) => section.hide === false)
    .sort((a, b) => a.ordering - b.ordering);

  return (
    <>
      <HomeBanner />

      {orderedSections.length > 0 ? (
        orderedSections.map((section, index) => (
          <div key={index}>{componentsMap[section.key]}</div>
        ))
      ) : (
        <>
          <SectionAbout />
          <OurProducts />
          <LatestNews />
          <OurCustomers />
          <ContactUs />
          
        </>
      )}
    </>
  );
}



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import LoadingOverlay from "../../layouts/LoadingOverlay/LoadingOverlay";

// import HomeBanner from "../../components/Home/banner/Homebanner";
// import ContactUs from "../../components/Home/contact/ContactUs";
// import OurCustomers from "../../components/Home/customer/OurCustomers";
// import LatestNews from "../../components/Home/latestnews/LatestNews";
// import OurProducts from "../../components/Home/ourproducts/OurProducts";
// import SectionAbout from "../../components/Home/sectionabout/SectionAbout";
// import VideoSection from "../../components/Home/video/VideoSection";

// import { fetchHomeWithOrderingData } from "../../../store/slices/homeWithOrderingSlice";
// import styles from '../../pages/ProductDetails/ProductDetails.module.css'; // أنشئ CSS للـ spinner إذا أحببت
// import { ClipLoader } from "react-spinners";

// export default function Home() {

//   const dispatch = useDispatch();
//     const lang = useSelector((state) => state.lang.lang);

//   const { data,error } = useSelector(
//     (state) => state.homeWithOrdering
//   );

//   // Loading محلي مستقل
//   const [isLoading, setIsLoading] = useState(true);


//   useEffect(() => {
//     setIsLoading(true); // شغل الـ spinner عند التحميل
//     dispatch(fetchHomeWithOrderingData(lang));
//   },  [dispatch, lang]);

//   // إيقاف الـ spinner عند وصول البيانات
// useEffect(() => {
//   if (data && data.data?.sections) {
//     setIsLoading(false);
//   } else {
//     setIsLoading(true); // تأكد أنه يعيد التفعيل عند تغيير اللغة
//   }
// }, [data]);


//   if (isLoading) {
//     return <div className={styles.LoadingOverlay}>
//         <ClipLoader color="#C78E50" size={100} />
//       </div>;
//   }

//   if (error) {
//     console.error(error);
//   }

//   const sections = data?.data?.sections || [];

//   const componentsMap = {
//     products: <OurProducts />,
//     about: <SectionAbout />,
//     latest_news: <LatestNews />,
//     our_customers: <OurCustomers />,
//     contact_us: <ContactUs />,
//   };

//   const orderedSections = sections
//     .map((section) => {
//       const key = Object.keys(section)[0];
//       return { key, ...section[key] };
//     })
//     .filter((section) => section.hide === false)
//     .sort((a, b) => a.ordering - b.ordering);

//   return (
//     <>
//       <HomeBanner />
//       {orderedSections.length > 0 ? (
//         orderedSections.map((section, index) => (
//           <div key={index}>{componentsMap[section.key]}</div>
//         ))
//       ) : (
//         <>
//           <SectionAbout />
//           <OurProducts />
//           <VideoSection />
//           <LatestNews />
//           <OurCustomers />
//           <ContactUs />
//         </>
//       )}
//     </>
//   );
// }


// import HomeBanner from '../../components/Home/banner/Homebanner';
//  import ContactUs from '../../components/Home/contact/ContactUs';
//   import OurCustomers from '../../components/Home/customer/OurCustomers';
//    import LatestNews from '../../components/Home/latestnews/LatestNews';
//     import OurProducts from '../../components/Home/ourproducts/OurProducts';
//      import SectionAbout from '../../components/Home/sectionabout/SectionAbout';
//       import VideoSection from '../../components/Home/video/VideoSection';
//        export default function Home() 
//        { return ( 
//        <> <HomeBanner /> 
//        <OurProducts/> 
//        <SectionAbout/>
//         <VideoSection /> 
//         <LatestNews/> 
//         <OurCustomers /> 
//         <ContactUs /> 
//         </> 
//         ); }