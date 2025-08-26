import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layouts/MainLayout';
import About from './pages/About/About';
import WhoWeAre from './pages/Whoweare/WhoWeAre';
import OurStrategy from './pages/OurStrategy/OurStrategy';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {path: 'about-us', element:<About />},
      {path: 'about-us/Who-We-Are', element: <WhoWeAre />},
      {path: 'about-us/Our-Strategy', element: <OurStrategy />},
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
