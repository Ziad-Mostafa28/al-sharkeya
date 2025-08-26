import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layouts/MainLayout';
import About from './pages/About/About';
import OurProducts from './pages/OurProducts/OurProducts';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element:  <About />},
      { path: 'our-products/overview', element:  <OurProducts/>},
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
