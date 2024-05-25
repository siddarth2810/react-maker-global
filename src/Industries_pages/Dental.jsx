import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import DentalImage from "../assets/images/Dental.png";
import FloatingButtons from "../components/FloatingButtons";

const Dental = () => {
  return (
    <>
      <HeaderAndNav />
      <div class="container-fluid" id="about-page-container">
        <div class="three">
          <h1>Dental</h1>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src={DentalImage} style={{ height: "97%", width: "100%" }} />
          </div>

          <div class="col-lg-8 " id="industries-page-content">
            <p>
              Within the dental industry, our company has strategically embraced
              3D printing as a cornerstone of technical innovation,
              revolutionizing traditional methodologies and elevating dental
              practices to unprecedented levels of precision and customization.
              Additive manufacturing technologies have become integral in
              reshaping how dental solutions are conceived, designed, and
              delivered. One primary application lies in the production of
              highly intricate dental prosthetics, such as crowns, bridges, and
              dental implants. Utilizing advanced materials and precise layering
              techniques, our 3D printing processes enable the creation of
              bespoke dental components with unparalleled accuracy, fitting
              seamlessly into patients' anatomies. This precision not only
              enhances patient comfort but also ensures optimal functionality
              and durability.
            </p>
            <p>
              The field of orthodontics has witnessed a paradigm shift through
              the application of 3D printing. Our company leverages this
              technology to manufacture personalized orthodontic devices,
              including clear aligners and retainers. By utilizing precise
              digital models and additive manufacturing, we can tailor these
              devices to individual patient specifications, ensuring a superior
              fit and treatment outcome. Additionally, 3D printing facilitates
              the creation of detailed surgical guides for dental procedures.
              These guides, produced with exceptional precision, aid dental
              surgeons in navigating complex procedures, enhancing the
              predictability and success of interventions.
              <br />{" "}
            </p>

            <p>
              Our commitment to advancing dental care is further manifested in
              the integration of biocompatible materials and cutting-edge
              printing techniques. This not only ensures the highest quality in
              dental products but also aligns with evolving standards in patient
              safety and treatment efficacy.
            </p>
            <p>
              Our commitment to advancing dental care is further manifested in
              the integration of biocompatible materials and cutting-edge
              printing techniques. This not only ensures the highest quality in
              dental products but also aligns with evolving standards in patient
              safety and treatment efficacy.
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
      <FloatingButtons />
      <Footer />
    </>
  );
};

export default Dental;
