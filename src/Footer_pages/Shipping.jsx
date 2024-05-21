import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";

const Shipping = () => {
  return (
    <>
      <HeaderAndNav />
      <div class="container-fluid" id="about-page-container">
        <div className="policies-heading">
          <h2>Shipping</h2>
        </div>

        <div class="container-fluid" id="industries-page-content">
          <h4>Shipping Options:</h4>

          <p>
            Priority Shipping (2-3 Business Days): Customers opting for Priority
            Shipping will receive their orders within 2 to 3 business days from
            the date of purchase. This expedited service ensures prompt delivery
            while upholding the quality standards synonymous with Maker Global.
          </p>

          <p>
            Normal Shipping (3-6 Business Days): For customers choosing Normal
            Shipping, orders will be delivered within a standard timeframe of 3
            to 6 business days. Each product is subject to comprehensive quality
            assurance protocols and secure packaging to maintain product
            integrity during transit.
          </p>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Shipping;
