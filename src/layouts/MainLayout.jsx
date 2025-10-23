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
import { fetchCustomersData } from '../../store/slices/customersSlice';
import { fetchWhoWeAre } from '../../store/slices/aboutWhoWeAreSlice';
import { fetchAboutHistory } from '../../store/slices/aboutHistorySlice';
import { fetchAboutShareholders } from '../../store/slices/aboutShareholdersSlice';
import { fetchBoardMembers } from '../../store/slices/boardMembersSlice';
import { fetchManagementTeam } from '../../store/slices/managementTeamSlice';
import { fetchFaqsData } from '../../store/slices/faqsSlice';
import { fetchStrategy } from '../../store/slices/ourStrategy';
import { fetchBranchesData } from '../../store/slices/branchesSlice';
import { fetchSugarHistory } from '../../store/slices/sugarHistory';
import { fetchSugarFacts } from '../../store/slices/factsSugarSlice';
import { fetchSustainability } from '../../store/slices/sustainabilitySlice';
import { fetchDownloadBrochure } from '../../store/slices/downloadBrochureSlice';

export default function MainLayout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    const urlLang = location.pathname.split("/")[1];
    if (urlLang === "ar" || urlLang === "en") {
      if (urlLang !== lang) {
        dispatch(setLanguage(urlLang));
      }
    } else {
      const savedLang = localStorage.getItem("lang") || "en";
      window.location.replace(`/${savedLang}`);
    }
  }, [location, lang, dispatch]);


  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => {
    dispatch(fetchHomeData(lang));
    dispatch(fetchRecipesData(lang));
    dispatch(fetchNewsData(lang));
    dispatch(fetchCertificationsData(lang));
    dispatch(fetchCustomersData(lang));
    dispatch(fetchWhoWeAre(lang));
    dispatch(fetchAboutHistory(lang));
    dispatch(fetchAboutShareholders(lang));
    dispatch(fetchBoardMembers(lang));
    dispatch(fetchManagementTeam(lang));
    dispatch(fetchFaqsData(lang));
    dispatch(fetchStrategy(lang));
    dispatch(fetchBranchesData(lang));
    dispatch(fetchSugarHistory(lang));
    dispatch(fetchSugarFacts(lang));
    dispatch(fetchSustainability(lang));
    dispatch( fetchDownloadBrochure(lang));

   

  }, [lang, dispatch]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <LoadingOverlay />

      <Outlet />

      <Footer />
    </>
  );
}
