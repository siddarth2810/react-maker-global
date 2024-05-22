import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import { Link } from "react-router-dom";
import Career1 from "../assets/images/career1.webp";
import Career2 from "../assets/images/career2.webp";

const Careers = () => {
  return (
    <>
      <HeaderAndNav />
      <div className="career-container">
        <img src={Career1} height="100%" width="100%" />
        <img src={Career2} height="100%" width="100%" id="career-image2" />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Careers;
