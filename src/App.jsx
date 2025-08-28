import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
      {path: 'about-us/Our-Shareholders', element: <OurShareholders />},
      {path: 'about-us/Board-Members', element: <BoardMembers />},
      {path: 'about-us/Management-Team', element: <ManagementTeam />},

      { path: 'our-products/overview', element:  <Overview/>},
      { path: 'our-products/white-sugar', element:  <WhiteSugar/>},
      { path: 'our-products/molasses', element:  <Molasses/>},
      { path: 'our-products/pellets', element:  <Pellets/>},


    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
