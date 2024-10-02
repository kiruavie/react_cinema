import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/favorite",
    element: <Favorite />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
