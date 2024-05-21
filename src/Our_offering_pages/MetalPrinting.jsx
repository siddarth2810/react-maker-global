import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import metalPrint from "../assets/images/metal-print.webp";
import { ScrollRestoration } from "react-router-dom";

const MetalPrinting = () => {
  return (
    <>
      <HeaderAndNav />
      <div>
        <img
          src={metalPrint}
          height={"100%"}
          width={"100%"}
          id="metal-3d-image"
        />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default MetalPrinting;
