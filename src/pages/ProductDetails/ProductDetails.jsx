import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SecBanner from '../../components/SharedComponents/SecBanner/SecBanner';
import SugarBrochure from '../../components/OurProducts/WhiteSugar/SugarBrochure/SugarBrochure';
import PharmaAndCommercial from '../../components/OurProducts/WhiteSugar/pharmaAndCommercial/pharmaAndCommercial';
import SugarImage from '../../components/OurProducts/WhiteSugar/SugarImage/SugarImage';
import SugerSection from '../../components/OurProducts/WhiteSugar/SugerSection/SugerSection';
import PremiumWhite from '../../components/OurProducts/WhiteSugar/PremiumWhite/PremiumWhite';
import ProductsLogo from '../../components/OurProducts/WhiteSugar/ProductsLogo/ProductsLogo';
import { fetchProductsData } from '../../../store/slices/productsHeaderList';

// Map sections to components
const componentMap = {
  brochure_section: SugarBrochure,
  two_cols_section: PharmaAndCommercial,
  one_col_section: SugerSection,
  one_col_section_right_image: SugarImage,
  one_col_section_left_image: PremiumWhite,
  full_width_section: ProductsLogo,
  section_customers: ProductsLogo, 
};

export default function ProductDetails() {
  const { id } = useParams(); // ناخد id من URL
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsData(id));
    }
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data found</p>;

  // ترتيب السكشنات حسب ordering
  const sections = Object.entries(data.sections || {})
    .filter(([key, section]) => !section.hide)
    .sort((a, b) => (a[1].ordering || 0) - (b[1].ordering || 0));

  return (
    <>
      <SecBanner
        title={data.general?.name || ''}
        subtitle="Products"
        image={data.general?.banner || ''}
      />

      {/* {sections.map(([key, sectionData]) => {
        const Component = componentMap[key];
        if (!Component)
          return (
            <div
              key={key}
              style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}
            >
              <p>Placeholder for {key}</p>
            </div>
          );

        return <Component key={key} data={sectionData} />;
      })} */}

      {sections.map(([key, sectionData]) => {
  const Component = componentMap[key];
  if (!Component) return null; // نرجع null بدل placeholder

  return <Component key={key} data={sectionData} />;
})}

    </>
  );
}
