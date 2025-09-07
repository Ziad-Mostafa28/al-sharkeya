import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import SecBanner from '../components/SharedComponents/SecBanner/SecBanner';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function MainLayout() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Outlet />

      <Footer />
    </>
  );
}
