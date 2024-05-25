import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import printing1 from "../assets/images/3dprinting-1.webp";
import printing2 from "../assets/images/3dprinting-2.webp";
import printing3 from "../assets/images/3dprinting-3.webp";
import FloatingButtons from "../components/FloatingButtons";

const RapidPrototyping = () => {
  return (
    <>
      <HeaderAndNav />
      <div>
        <img
          src={printing1}
          height={"100%"}
          width={"100%"}
          id="three-D-Printing-Page-Image"
        />
        <img
          src={printing2}
          height={"100%"}
          width={"100%"}
          id="three-D-Printing-Page-Image"
        />
        <img
          src={printing3}
          height={"100%"}
          width={"100%"}
          id="three-D-Printing-Page-Image"
        />
      </div>
      <ContactUs />
      <FloatingButtons />
      <Footer />
    </>
  );
};

export default RapidPrototyping;
