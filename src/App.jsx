import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layouts/MainLayout';
import About from './pages/About/About';

import WhoWeAre from './pages/Whoweare/WhoWeAre';
import OurStrategy from './pages/OurStrategy/OurStrategy';

import Overview from './pages/Overview/Overview';
import WhiteSugar from './pages/WhiteSugar/WhiteSugar';
import Molasses from './pages/Molasses/Molasses';
import OurProducts from './pages/OurProducts/OurProducts';
import CompanyHistory from './pages/CompanyHistory/CompanyHistory';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {path: 'about-us', element:<About />},
      {path: 'about-us/Who-We-Are', element: <WhoWeAre />},
      {path: 'about-us/Our-Strategy', element: <OurStrategy />},
      {path: 'about-us/Company-History', element: <CompanyHistory />},

      { path: 'our-products/overview', element:  <Overview/>},
      { path: 'our-products/white-sugar', element:  <WhiteSugar/>},
      { path: 'our-products/molasses', element:  <Molasses/>},

    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
