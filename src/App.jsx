import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './layouts/MainLayout';
import { lazy, Suspense } from 'react';
const About = lazy(() => import('./pages/About/About'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element:  
      <Suspense fallback={<div>Loading...</div>}>
      <About />
      </Suspense> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
