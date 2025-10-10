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
import NoAppFound from './pages/NoAppFound';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/appData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appData.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("/appData.json"),
        Component: Installation,
      },
      {
        path: "app-detils/:id",
        // loader: () => fetch("/appData.json"),
        // Component: AppDetils,
        loader: async ({ params }) => {
          const res = await fetch("/appData.json");
          const data = await res.json();

          const id = parseInt(params.id);
          const foundApp = data.find((app) => app.id === id);

          if (!foundApp) {
            throw new Response("No app found", { status: 404 });
          }

          return data;
        },
        element: <AppDetils />,
        errorElement: <NoAppFound />,
      },
      {
        path: "/no-app-found",
        Component: NoAppFound,
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
