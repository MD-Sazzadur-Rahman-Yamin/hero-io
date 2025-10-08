import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from './Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
// import router from "./routes/Routes.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
      }
    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
