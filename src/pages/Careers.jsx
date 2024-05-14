import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import { Link } from "react-router-dom";

const Careers = () => {
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
  return (
    <>
      {/* <HeaderAndNav />

      <ContactUs />
      <Footer /> */}

      <div>
        <p>
          {" "}
          <Link to="/">Home page</Link>
        </p>
      </div>
    </>
  );
};

export default Careers;
