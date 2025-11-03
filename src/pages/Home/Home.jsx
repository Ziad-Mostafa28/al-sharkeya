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


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import LoadingOverlay from "../../layouts/LoadingOverlay/LoadingOverlay";
// import HomeBanner from "../../components/Home/banner/Homebanner";
// import SectionAbout from "../../components/Home/sectionabout/SectionAbout";
// import OurProducts from "../../components/Home/ourproducts/OurProducts";
// import LatestNews from "../../components/Home/latestnews/LatestNews";
// import OurCustomers from "../../components/Home/customer/OurCustomers";
// import ContactUs from "../../components/Home/contact/ContactUs";
// import { fetchHomeWithOrderingData } from "../../../store/slices/homeWithOrderingSlice";

// export default function Home() {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.homeWithOrdering);

//   useEffect(() => {
//     dispatch(fetchHomeWithOrderingData("en"));
//   }, [dispatch]);

//   if (loading || !data?.data?.sections) return <LoadingOverlay />;
//   if (error) console.error("Error loading data:", error);

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