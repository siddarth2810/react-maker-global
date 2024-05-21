import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";

const Cancel = () => {
  return (
    <>
      <HeaderAndNav />
      <div class="container-fluid" id="about-page-container">
        <div className="policies-heading">
          <h2>Cancellation And Refund</h2>
        </div>

        <div class="container-fluid" id="industries-page-content">
          <p>
            Maker Global believes in helping its customers as far as possible,
            and has therefore a liberal cancellation policy. Under this policy:
          </p>

          <p>
            Cancellations will be considered only if the request is made
            immediately after placing the order. However, the cancellation
            request may not be entertained if the orders have been communicated
            to the vendors/merchants and they have initiated the process of
            shipping them.
          </p>

          <p>
            Maker Global does not accept cancellation requests for perishable
            items like flowers, eatables etc. However, refund/replacement can be
            made if the customer establishes that the quality of product
            delivered is not good.
          </p>

          <p>
            Returns are eligible only within 15 days from the date of Purchase
          </p>

          <p>
            Report by Sending a Email to info@makerglobal.in within 3 days of
            delivery about the defect or issue with Product and the images of
            the defective product. On Qualifying the request, Return or Exchange
            will be approved and clustomer will be notified with necessary
            information
          </p>

          <p>
            On succesfull validation for Refund request, Refund initiation email
            will be sent and will refund within 7 days from the email.
          </p>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Cancel;
