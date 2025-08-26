import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import SecBanner from '../components/SharedComponents/SecBanner/SecBanner';

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* <SecBanner
        title="Who we are"
        subtitle="About us"
        image="/img/homepage/banner.png"
      /> */}

        <Outlet />
        
      <Footer />
    </>
  );
}
