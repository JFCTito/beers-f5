import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { AllBeersPage } from "./pages/AllBeersPage.tsx";
import { RandomBeerPage } from "./pages/RandomBeerPage.tsx";
import { AddBeerPage } from "./pages/AddBeerPage.tsx";
import { BeersDetailPage } from "./pages/BeersDetailPage.tsx";
import { Navbar } from "./components/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/beers",
        element: <AllBeersPage />,
      },
      {
        path: "/random-beer",
        element: <RandomBeerPage />,
      },
      {
        path: "/new-beer",
        element: <AddBeerPage />,
      },
      {
        path: "/beers/:beerId",
        element: <BeersDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
