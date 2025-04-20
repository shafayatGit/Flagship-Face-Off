import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Home/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Home/Pages/About";
import Favorites from "../Home/Pages/favorites";
import PhoneDetails from "../Home/Pages/PhoneDetails";
import ErrorPage from "../Home/Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <p>Loading.....</p>,
        loader: () => fetch("../phones.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/phone-details/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch("../phones.json"),
      },
    ],
  },
]);

export default router;
