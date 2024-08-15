import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout element={<HomePage />} />,
  },
  {
    path: "projects",
    element: <Layout element={<ProjectsPage />} />,
  },
  {
    path: "contact",
    element: <Layout element={<ContactPage />} />,
  },
  {
    path: "about",
    element: <Layout element={<AboutPage />} />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
