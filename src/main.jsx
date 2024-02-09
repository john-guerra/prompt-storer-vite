import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
