import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from './Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Apps from './pages/Apps';
import Installation from './pages/Installation'
import AppDetils from "./pages/AppDetils";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/trandingAppData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "app-detils/:id",
        loader: () => fetch("/appData.json"),
        Component: AppDetils,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} 
    //fallbackElement={<p>Loading...</p>} 
    />
  </StrictMode>
);
