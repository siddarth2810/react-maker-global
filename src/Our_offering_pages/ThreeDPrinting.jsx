import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import Manprotto from "../assets/images/3dPrinterPage.webp";
import downlaodBrochure from "../assets/images/download_brochure.webp";
import FloatingButtons from "../components/FloatingButtons";

const threeDPrinting = () => {
  return (
    <>
      <HeaderAndNav />
      <div>
        <img src={Manprotto} id="metal-3d-image" />
        <img src={downlaodBrochure} id="manprotto-downloadIcon" />
      </div>
      <ContactUs />
      <FloatingButtons />
      <Footer />
    </>
  );
};

export default threeDPrinting;
