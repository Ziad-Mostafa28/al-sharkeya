// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';
// import SugarBrochure from '../../components/OurProducts/WhiteSugar/SugarBrochure/SugarBrochure';
// import PharmaAndCommercial from '../../components/OurProducts/WhiteSugar/pharmaAndCommercial/pharmaAndCommercial';
// import SugerSection from '../../components/OurProducts/WhiteSugar/SugerSection/SugerSection';
// import PremiumWhite from '../../components/OurProducts/WhiteSugar/PremiumWhite/PremiumWhite';
// import ProductsLogo from '../../components/OurProducts/WhiteSugar/ProductsLogo/ProductsLogo';
// import VideoSection from '../../components/OurProducts/Molasses/video/VideoSection'
// import ChemicalComposition from '../../components/OurProducts/Molasses/ChemicalComposition/ChemicalComposition'
// import SugarImage from '../../components/OurProducts/WhiteSugar/SugarImage/SugarImage'
// import SectionAbout from '../../components/OurProducts/Pellets/sectionabout/SectionAbout'
// import ChemicalCompositionLeft from '../../components/OurProducts/Molasses/ChemicalCompositionLeft/ChemicalCompositionLeft';

// import { fetchProductsData } from '../../../store/slices/productsHeaderList';
// import LoadingOverlay from '../../layouts/LoadingOverlay/LoadingOverlay';

// // Map sections to components
// const componentMap = {
//   brochure_section: SugarBrochure,
//   two_cols_section: PharmaAndCommercial,
//   one_col_section: VideoSection,
//   one_col_section_right_image: ChemicalComposition,
//   one_col_section_left_image: ChemicalCompositionLeft,
//   full_width_section: SugarImage,
//   section_description_with_list_cards:SugerSection ,
//   quality_section : PremiumWhite,
//   section_customers:  ProductsLogo ,
//  numbers_section: SectionAbout, 
// };

// export default function ProductDetails() {
//   const { id } = useParams(); 
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector(state => state.products);

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchProductsData(id));
//     }
//   }, [id, dispatch]);

// if (loading || !data) return <LoadingOverlay />;
//   if (error) return <p>{error}</p>;
//   if (!data) return <p>No data found</p>;

//   // ترتيب السكشنات حسب ordering
//   const sections = Object.entries(data.sections || {})
//     .filter(([key, section]) => !section.hide)
//     .sort((a, b) => (a[1].ordering || 0) - (b[1].ordering || 0));
    

//   return (
//     <>
//       <SecBanner
//         title={data.general?.name || ''}
//         subtitle="Products"
//         image={data.general?.banner || ''}
//       />

//       {/* {sections.map(([key, sectionData]) => {
//         const Component = componentMap[key];
//         if (!Component)
//           return (
//             <div
//               key={key}
//               style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}
//             >
//               <p>Placeholder for {key}</p>
//             </div>
//           );

//         return <Component key={key} data={sectionData} />;
//       })} */}

//       {sections.map(([key, sectionData]) => {
//   const Component = componentMap[key];
//   if (!Component) return null; // نرجع null بدل placeholder

//   return <Component key={key} data={sectionData} />;
// })}

//     </>
//   );
// }







import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';
import SugarBrochure from '../../components/OurProducts/WhiteSugar/SugarBrochure/SugarBrochure';
import PharmaAndCommercial from '../../components/OurProducts/WhiteSugar/pharmaAndCommercial/pharmaAndCommercial';
import SugerSection from '../../components/OurProducts/WhiteSugar/SugerSection/SugerSection';
import PremiumWhite from '../../components/OurProducts/WhiteSugar/PremiumWhite/PremiumWhite';
import ProductsLogo from '../../components/OurProducts/WhiteSugar/ProductsLogo/ProductsLogo';
import VideoSection from '../../components/OurProducts/Molasses/video/VideoSection';
import ChemicalComposition from '../../components/OurProducts/Molasses/ChemicalComposition/ChemicalComposition';
import SugarImage from '../../components/OurProducts/WhiteSugar/SugarImage/SugarImage';
import SectionAbout from '../../components/OurProducts/Pellets/sectionabout/SectionAbout';
import ChemicalCompositionLeft from '../../components/OurProducts/Molasses/ChemicalCompositionLeft/ChemicalCompositionLeft';

import { fetchProductsData } from '../../../store/slices/productsHeaderList';
import { ClipLoader } from 'react-spinners';
import styles from './ProductDetails.module.css'; 

// Map sections to components
const componentMap = {
 brochure_section: SugarBrochure,
 two_cols_section: PharmaAndCommercial,
 one_col_section: VideoSection,
 one_col_section_right_image: ChemicalComposition,
  one_col_section_left_image: ChemicalCompositionLeft,
  full_width_section: SugarImage,
  section_description_with_list_cards:SugerSection ,
  quality_section : PremiumWhite,
  section_customers:  ProductsLogo ,
  numbers_section: SectionAbout, 
};

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
    const lang = useSelector((state) => state.lang.lang);
          const isArabic= lang === 'ar';  

  
  const { data, error } = useSelector(state => state.products);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);    
      dispatch(fetchProductsData(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading)
    return (
      <div className={styles.loading}>
        <ClipLoader color="#C78E50" size={100} />
      </div>
    );

  if (error) return <p>{error}</p>;
  if (!data) return <p>No data found</p>;

  // ترتيب السكشنات حسب ordering
  // const sections = Object.entries(data.sections || {})
  //   .filter(([section]) => !section.hide)
  //   .sort((a, b) => (a[1].ordering || 0) - (b[1].ordering || 0));

  const sections = Object.entries(data.sections || {})
  .filter(([_, section]) => section && !section.hide)
  .sort((a, b) => (a[1].ordering || 0) - (b[1].ordering || 0));


  return (
    <>
      <SecBanner
        title={data.general?.name || ''}
        subtitle= {isArabic?'منتجاتنا':'Products'}
        image={data.general?.banner || ''}
      />

      {sections.map(([key, sectionData]) => {
        const Component = componentMap[key];
        if (!Component) return null;
        return <Component key={key} data={sectionData} />;
      })}
    </>
  );
}
