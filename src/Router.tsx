import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Animals } from "./pages/AnimalList/AnimalList";
import AnimalView from "./pages/AnimalView";
import ErrorPage from "./pages/Error";

export const router = createBrowserRouter([
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
    path: "animals/:id",
    element: <AnimalView></AnimalView>,
  },
]);
