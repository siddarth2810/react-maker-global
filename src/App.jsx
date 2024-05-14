import { useState } from "react";
import HeaderAndNav from "./components/HeaderAndNav";
import "./App.css";
import RenderName from "./components/RenderName";
import { Link, createBrowserRouter } from "react-router-dom";
import MainSlider from "./components/MainSlider";
import CardsDisplay from "./components/CardsDisplay";
import ClientDisplay from "./components/ClientDisplay";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  //for hiding top header on scroll down
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

  //slider of index.html

  return (
    <>
      <HeaderAndNav />
      <MainSlider />
      <CardsDisplay />
      <ClientDisplay />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
