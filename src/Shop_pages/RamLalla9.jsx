import React from "react";
import Header from "../components/HeaderAndNav";
import Footer from "../components/Footer";
import "./RamLalla.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Reviews from "../assets/images/reviews.png";

//material ui
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

//icons
import threeDprinterImage from "../assets/icons/3d-printer.png";
import QualityAssurance from "../assets/icons/quality.png";
import SecurePayment from "../assets/icons/credit-card.png";
import DeliveryTruck from "../assets/icons/fast-delivery.png";

//ram lalla images
import FirstImage from "../assets/images/oneRam.png";
import SecondImage from "../assets/images/twoRam.png";
import ThirdImage from "../assets/images/threeRam.png";
import FourthImage from "../assets/images/RamVideo.png";

//lightgallery
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import lgVideo from "lightgallery/plugins/video";

const RamLalla9 = () => {
  const scriptRef = React.useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_NaTQd7EDaOTbVs");
    script.async = true;

    scriptRef.current.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      if (scriptRef.current) {
        scriptRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid ">
        <div className="row" style={{ marginTop: "120px" }}>
          <div className="col-lg-5 RamLalla-container">
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom, lgVideo]}
              mobileSettings={{ showCloseButton: true }}>
              <a data-src={FirstImage}>
                <img src={FirstImage} alt="Image 1" className="RamLallaImage" />
              </a>

              <a data-src={SecondImage}>
                <img src={SecondImage} alt="Image 2" className="sliderImages" />
              </a>

              <a data-src={ThirdImage}>
                <img src={ThirdImage} alt="Image 4" className="sliderImages" />
              </a>

              <a data-src="https://www.youtube.com/embed/bI-VcvXhzJo">
                <img src={FourthImage} alt="Image 4" className="sliderImages" />
              </a>
            </LightGallery>
          </div>
          <div className="col-lg-7">
            <h4 class="title text-dark">
              Ram Lalla Idol Miniature <br />
            </h4>
            <div className="mb-2">
              <span className="h5 price-tag" style={{ color: "#f06729" }}>
                ₹9999/-
              </span>
              <span classNameName="line-cut">
                <s>₹15000</s>
              </span>
              <span
                className="text"
                style={{ color: "green", marginLeft: "2px" }}>
                33% off
              </span>
            </div>
            <div>
              <h5>
                <strong>Size:</strong>
              </h5>
              <div className="col-lg-4 mb-2">
                <Link to="/RamLalla6">
                  <button
                    type="button"
                    className="btn btn-outline-secondary inactive-size-button">
                    6 Inches
                  </button>
                </Link>
                <Link to="#">
                  <button
                    type="button"
                    className="btn btn-outline-secondary active-size-button">
                    9 inches
                  </button>
                </Link>
              </div>

              <h5 className="mb-3" style={{ padding: "0;" }}>
                <strong>Color: Matt Black finish </strong>
              </h5>
            </div>
            <form id="buy-now-button" ref={scriptRef}></form>
            <div className="trust-icons">
              <div className="col-3">
                <img className="product-service-icon" src={DeliveryTruck} />

                <p>Shipping Free</p>
              </div>
              <div className="col-3">
                <div>
                  <img
                    className="product-service-icon"
                    src={QualityAssurance}
                  />
                </div>
                <p>Quality assured</p>
              </div>
              <div className="col-3">
                <div>
                  <img className="product-service-icon" src={SecurePayment} />
                </div>
                <p>Secure Payment</p>
              </div>
            </div>
            <div>
              <h5 className="mt-2 mb-2">
                {" "}
                <strong>Product Description</strong>
              </h5>
              <p className="mb-2 ">
                Introducing 6 & 9 Inch 3D-printed miniature of the revered
                deity, Ayodhya’s Ram Lalla. Precision-crafted with Premium
                Polymer resin, it embodies strength, wisdom, and divine grace.
                Elevate your sacred space with this artful fusion of innovation
                from Maker Global.
              </p>
              <p className="mb-2 ">
                Bring Home this high detailed Ayodhya's Ram Lalla as a Souvenir
                for you or your Friends!{" "}
              </p>
              <p>
                <strong>
                  #ramlalla #ayodhya #ayodhyarammandir #3dprinting
                </strong>
              </p>
            </div>
            <img src={Reviews} className="reviewsImage" srcset="" />
            <div className="mt-2 mb-2">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  SHIPPING AND DELIVERY POLICY
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      Dispatch in 3-4 business days from the date of order
                      (Manufacturing lead time)
                    </li>
                    <li>
                      <strong> After dispatch, </strong>
                      anticipate delivery by 3-7 business days across India.
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  FOR BULK ORDERS
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      Mail our Customer Support for Bulk orders / customization
                      :<strong>Info@makerglobal.in</strong>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  RETURN AND REFUND POLICY
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      Report by sending an email to{" "}
                      <strong>info@makerglobal.in</strong>
                      within
                      <strong>3 days</strong> of delivery regarding the defect
                      or issue with the product, and include images of the
                      defective product.
                    </li>

                    <li>
                      Approved Return/Exchange notifications include necessary
                      details. Refunds for validated requests occur within{" "}
                      <strong>7 days</strong> of the refund initiation email.
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>{" "}
            {/* end of the accordion div */}
            <div class="mb-2">
              <span class="m-0">
                {" "}
                <img src={threeDprinterImage} className="smallIcons" />
                Dispatch in 3-4 days from the date of order (Manufacturing lead
                time)
              </span>
            </div>
            <div class="mb-4 ">
              <span class="m-0">
                <img src={DeliveryTruck} className="smallIcons" />
                After dispatch, anticipate delivery by 3-7 business days across
                India.
              </span>
            </div>
          </div>{" "}
          {/* end of the col-lg-7 div */}
        </div>{" "}
        {/* end of the row div */}
      </div>
    </>
  );
};
export default RamLalla9;
