import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import ScaleModels1 from "../assets/images/ScaleModel1.jpg";
import ScaleModels2 from "../assets/images/ScaleModel2.jpg";
import ScaleModels3 from "../assets/images/ScaleModel3.jpg";
import ScaleModels4 from "../assets/images/ScaleModel4.jpg";
import FloatingButtons from "../components/FloatingButtons";

const ScaleModels = () => {
  return (
    <>
      <HeaderAndNav />
      <div>
        <img src={ScaleModels1} height={"100%"} width={"100%"} />
        <img src={ScaleModels2} height={"100%"} width={"100%"} />
        <img src={ScaleModels3} height={"100%"} width={"100%"} />
        <img src={ScaleModels4} height={"100%"} width={"100%"} />
      </div>
      <ContactUs />
      <FloatingButtons />
      <Footer />
    </>
  );
};

export default ScaleModels;
