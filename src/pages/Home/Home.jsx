// import { useSelector } from "react-redux";
// import HomeBanner from "../../components/Home/banner/Homebanner";
// import ContactUs from "../../components/Home/contact/ContactUs";
// import OurCustomers from "../../components/Home/customer/OurCustomers";
// import LatestNews from "../../components/Home/latestnews/LatestNews";
// import OurProducts from "../../components/Home/ourproducts/OurProducts";
// import SectionAbout from "../../components/Home/sectionabout/SectionAbout";
// import VideoSection from "../../components/Home/video/VideoSection";
// import LoadingOverlay from "../../layouts/LoadingOverlay/LoadingOverlay";

// export default function Home() {
//   const { data, loading, error } = useSelector((state) => state.homeWithOrdering);



//   if (loading) return <p>
//     <LoadingOverlay/>
//   </p>;
//   if (error) return <p>Error loading data</p>;
//   if (!data?.data?.sections) return null;

//   const sections = data.data.sections;

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

//       {orderedSections.map((section, index) => (
//         <div key={index}>{componentsMap[section.key]}</div>
//       ))}
//     </>
//   );
// }


import HomeBanner from '../../components/Home/banner/Homebanner';
 import ContactUs from '../../components/Home/contact/ContactUs';
  import OurCustomers from '../../components/Home/customer/OurCustomers';
   import LatestNews from '../../components/Home/latestnews/LatestNews';
    import OurProducts from '../../components/Home/ourproducts/OurProducts';
     import SectionAbout from '../../components/Home/sectionabout/SectionAbout';
      import VideoSection from '../../components/Home/video/VideoSection';
       export default function Home() 
       { return ( 
       <> <HomeBanner /> 
       <OurProducts/> 
       <SectionAbout/>
        <VideoSection /> 
        <LatestNews/> 
        <OurCustomers /> 
        <ContactUs /> 
        </> 
        ); }