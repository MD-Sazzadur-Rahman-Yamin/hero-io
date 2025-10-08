import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
// import router from "./routes/Routes.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
