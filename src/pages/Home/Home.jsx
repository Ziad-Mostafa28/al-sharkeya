import HomeBanner from '../../components/Home/banner/Homebanner';
import ContactUs from '../../components/Home/contact/ContactUs';
import OurCustomers from '../../components/Home/customer/OurCustomers';
import LatestNews from '../../components/Home/latestnews/LatestNews';
import OurProducts from '../../components/Home/ourproducts/OurProducts';
import SectionAbout from '../../components/Home/sectionabout/SectionAbout';
import VideoSection from '../../components/Home/video/VideoSection';

export default function Home() {


  return (
    <>
      <HomeBanner />
      <OurProducts/>
      <SectionAbout/>
      <VideoSection />
      <LatestNews/>
      <OurCustomers />
      <ContactUs />
    </>
  );
}
