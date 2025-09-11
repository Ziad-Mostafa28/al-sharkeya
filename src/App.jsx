import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layouts/MainLayout';
import About from './pages/About/About';

import WhoWeAre from './pages/Whoweare/WhoWeAre';
import OurStrategy from './pages/OurStrategy/OurStrategy';

import Overview from './pages/Overview/Overview';
import WhiteSugar from './pages/WhiteSugar/WhiteSugar';
import Molasses from './pages/Molasses/Molasses';
import CompanyHistory from './pages/CompanyHistory/CompanyHistory';
import Pellets from './pages/Pellets/Pellets';

import OurShareholders from './pages/OurShareholders/OurShareholders';
import BoardMembers from './pages/BoardMembersPage/BoardMembers';
import ManagementTeam from './pages/ManagementTeam/ManagementTeam';

import Certifications from './pages/Certifications/Certifications';
import SustainabilityPage from './pages/SustainabilityPage/Sustainability';
import CSR from './pages/CSR/CSR';

import Careers from './pages/Careers/Careers';
import JopDetails from './pages/JopDetails/JopDetails';

import ContactUs from './pages/ContactUs/ContactUs';
import CodeConductPage from './pages/CodeConductPage/CodeConductPage';
import News from './pages/NewPage/News';
import NewsDetailsPage from './pages/NewsDetailsPage/NewsDetailsPage';
import FaqsPage from './pages/FaqsPage/FaqsPage';

import Recipes from './pages/Recipes/Recipes';
import RecipesDetails from './pages/RecipesDetails/RecipesDetails';
import FactsPage from './pages/FactsPage/FactsPage';

import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import DownloadBrochure from './pages/DownloadBrochure/DownloadBrochure';

import OurCustomerPage from './pages/OurCustomerPage/OurCustomerPage';
import SugarHistory from './pages/SugarHistory/SugarHistory';




const router = createBrowserRouter([

   {
    path: '/',
    element: <Navigate to={`/${localStorage.getItem('lang') || 'en'}`} replace />,
  },
  {
   path: '/:lang',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      {path: 'about-us', element:<About />},
      {path: 'about-us/who-we-are', element: <WhoWeAre />},
      {path: 'about-us/our-strategy', element: <OurStrategy />},
      {path: 'about-us/company-history', element: <CompanyHistory />},
      {path: 'about-us/our-shareholders', element: <OurShareholders />},
      {path: 'about-us/board-members', element: <BoardMembers />},
      {path: 'about-us/management-team', element: <ManagementTeam />},

      {path: 'our-responsibilities/certifications', element: <Certifications />},
      {path: 'our-responsibilities/sustainability', element: <SustainabilityPage />},
      {path: 'our-responsibilities/csr', element: <CSR />},
      {path: 'our-responsibilities/codeconduct', element: <CodeConductPage />},
      {path: 'news', element: <News />},
      {path: 'news-details', element: <NewsDetailsPage />},
      {path: 'faqs', element: <FaqsPage />},
      {path: 'facts-about-sugar', element: <FactsPage />},

      { path: 'our-products/overview', element:  <Overview/>},
      { path: 'our-products/white-sugar', element:  <WhiteSugar/>},
      { path: 'our-products/molasses', element:  <Molasses/>},
      { path: 'our-products/pellets', element:  <Pellets/>},
      { path: 'careers', element:  <Careers/>},
      { path: 'careers/job-details', element:  <JopDetails/>},
      { path: 'contact-us', element:  <ContactUs/>},
      { path: 'recipes', element:  <Recipes/>},
      { path: 'recipe-details', element:  <RecipesDetails/>},
      { path: 'privacy-policy', element:  <PrivacyPolicy/>},
      { path: 'terms-of-service', element:  <TermsOfService/>},
      { path: 'download-brochure', element:  <DownloadBrochure/>},

      { path: 'about-us', element: <About /> },
      { path: 'about-us/who-we-are', element: <WhoWeAre /> },
      { path: 'about-us/our-strategy', element: <OurStrategy /> },
      { path: 'about-us/company-history', element: <CompanyHistory /> },
      { path: 'about-us/our-shareholders', element: <OurShareholders /> },
      { path: 'about-us/board-members', element: <BoardMembers /> },
      { path: 'about-us/management-team', element: <ManagementTeam /> },

      { path: 'our-responsibilities/certifications', element: <Certifications /> },
      { path: 'our-responsibilities/sustainability', element: <SustainabilityPage /> },
      { path: 'our-responsibilities/csr', element: <CSR /> },
      { path: 'our-responsibilities/codeconduct', element: <CodeConductPage /> },
      { path: 'news', element: <News /> },
      { path: 'news-details', element: <NewsDetailsPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      { path: 'facts-about-sugar', element: <FactsPage /> },
      { path: 'our-customer', element: <OurCustomerPage /> },

      { path: 'our-products/overview', element: <Overview /> },
      { path: 'our-products/white-sugar', element: <WhiteSugar /> },
      { path: 'our-products/molasses', element: <Molasses /> },
      { path: 'our-products/pellets', element: <Pellets /> },
      { path: 'careers', element: <Careers /> },
      { path: 'careers/job-details', element: <JopDetails /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'recipes', element: <Recipes /> },
      { path: 'recipe-details/:id', element: <RecipesDetails /> },
      { path: 'sugar-history', element: <SugarHistory /> },




    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
