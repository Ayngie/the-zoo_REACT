import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import "./main.scss"; // fd. app.css
import { router } from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
