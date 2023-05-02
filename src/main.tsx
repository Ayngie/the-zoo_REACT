import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./main.scss"; //fd. app.css
import Home from "./pages/Home";
import { Animals } from "./pages/Animals/Animals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AnimalView from "./pages/AnimalView";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
