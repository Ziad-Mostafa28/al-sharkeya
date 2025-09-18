import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import SecBanner from '../components/SharedComponents/SecBanner/SecBanner';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLanguage } from '../../store/slices/langSlice';
import { fetchHomeData } from '../../store/slices/homeSlice';
import { fetchNewsData } from '../../store/slices/newsSlice';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { fetchRecipesData } from '../../store/slices/recipeSlice';
import { fetchCertificationsData } from '../../store/slices/certificationsSlice';

export default function MainLayout() {
    const dispatch = useDispatch();
  const location = useLocation();
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    const urlLang = location.pathname.split("/")[1];
    if (urlLang === "ar" || urlLang === "en") {
      dispatch(setLanguage(urlLang));
    } else {
      const savedLang = localStorage.getItem("lang") || "en";
      window.location.replace(`/${savedLang}`);
    }
  }, [location]);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => {
    dispatch(fetchHomeData(lang));
  }, [lang, dispatch]);

    useEffect(() => {
    dispatch(fetchRecipesData(lang));
    }, [lang, dispatch]);

  useEffect(() => {
    dispatch(fetchNewsData(lang));
  }, [lang, dispatch]);

    useEffect(() => {
    dispatch(fetchCertificationsData(lang));
  }, [lang, dispatch]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <LoadingOverlay/>

      <Outlet />

      <Footer />
    </>
  );
}
