import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import "./index.css";
import Profile from "./components/Profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import Careers from "./pages/Careers.jsx";
import RapidPrototyping from "./Our_offering_pages/RapidPrototyping.jsx";
import MetalPrinting from "./Our_offering_pages/MetalPrinting.jsx";
import ThreeDPrinting from "./Our_offering_pages/ThreeDPrinting.jsx";
import Aerospace from "./Industries_pages/Aerospace.jsx";
import Architecture from "./Industries_pages/Architecture.jsx";
import Automotive from "./Industries_pages/Automotive.jsx";
import Jewellery from "./Industries_pages/Jewellery.jsx";
import Manufacturing from "./Industries_pages/Manufacturing.jsx";
import Movies from "./Industries_pages/Movies.jsx";
import OilAndGas from "./Industries_pages/OilAndGas.jsx";
import PrivacyPolicy from "./Footer_pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./Footer_pages/TermsAndConditions.jsx";
import Shipping from "./Footer_pages/Shipping.jsx";
import Cancel from "./Footer_pages/Cancellation.jsx";
import Dental from "./Industries_pages/Dental.jsx";
import CNC from "./Card_pages/CNC.jsx";
import InjectionMoulding from "./Card_pages/InjectionMoulding.jsx";
import ReverseEngineering from "./Card_pages/ReverseEngineering.jsx";
import VaccumCasting from "./Card_pages/VaccumCasting.jsx";
import CAD from "./Card_pages/CAD.jsx";
import Gallery from "./Gallery/Gallery.jsx";

let prevScrollPos = window.scrollY;
window.onscroll = function () {
  const topHeader = document.getElementById("TopHeader");
  const Header = document.getElementById("header-container");
  const currentScrollPos = window.scrollY;

  if (prevScrollPos < currentScrollPos) {
    topHeader.style.display = "none";
  } else if (currentScrollPos === 0) {
    topHeader.style.display = "flex";
  }
  prevScrollPos = currentScrollPos;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Profile",
    element: <Profile />,
  },
  {
    path: "AboutPage",
    element: <AboutPage />,
  },
  {
    path: "Careers",
    element: <Careers />,
  },
  {
    path: "RapidPrototyping",
    element: <RapidPrototyping />,
  },
  {
    path: "MetalPrinting",
    element: <MetalPrinting />,
  },
  {
    path: "ThreeDPrinting",
    element: <ThreeDPrinting />,
  },
  {
    path: "Aerospace",
    element: <Aerospace />,
  },
  {
    path: "Architecture",
    element: <Architecture />,
  },
  {
    path: "Automotive",
    element: <Automotive />,
  },
  {
    path: "Jewellery",
    element: <Jewellery />,
  },
  {
    path: "Manufacturing",
    element: <Manufacturing />,
  },
  {
    path: "Movies",
    element: <Movies />,
  },
  {
    path: "OilAndGas",
    element: <OilAndGas />,
  },
  {
    path: "Dental",
    element: <Dental />,
  },

  {
    path: "PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "TermsAndConditions",
    element: <TermsAndConditions />,
  },
  {
    path: "Shipping",
    element: <Shipping />,
  },
  {
    path: "Cancel",
    element: <Cancel />,
  },
  {
    path: "CNC",
    element: <CNC />,
  },
  {
    path: "InjectionMoulding",
    element: <InjectionMoulding />,
  },
  {
    path: "ReverseEngineering",
    element: <ReverseEngineering />,
  },
  {
    path: "VaccumCasting",
    element: <VaccumCasting />,
  },
  {
    path: "CAD",
    element: <CAD />,
  },
  {
    path: "Gallery",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
