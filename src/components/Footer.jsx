import React from "react";

import linkedinIcon from "../assets/icons/linkedin.png";
import youtubeIcon from "../assets/icons/youtube.png";
import instaIcon from "../assets/icons/insta1.png";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div>
                <h5 className="mt-2 text-white-50">
                  <small>Offerings</small>
                </h5>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="pages/rapid-prototyping.html">
                  Rapid prototyping
                </a>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="pages/3d-printers.html">
                  3d printers
                </a>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="pdf/SCALE MODELS.pdf">
                  Scale Models
                </a>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="pages/metal-3d-printing.html">
                  Metal 3d printing
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div>
                <h5 className="mt-2 text-white-50">
                  <small>Legal</small>
                </h5>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="footer-pages/privacy_policy.html">
                  Privacy Policy
                </a>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="footer-pages/terms_and_conditions.html">
                  Terms and conditions
                </a>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="footer-pages/cancellation_refund.html">
                  Cancellation and refund
                </a>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="footer-pages/shipping_and_delivery.html">
                  Shipping and delivery
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div>
                <h5 className="mt-2 text-white-50">
                  <small>Company</small>
                </h5>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="pages/career.html">
                  Careers
                </a>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="pages/about.html">
                  About Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div>
                <h5 className="mt-2 text-white-50">
                  <small>Locations</small>
                </h5>
                <a
                  className="small p-0 my-1 nav-link link-secondary"
                  href="#"
                  alt="3D Printing Services in Hyderabad"
                  title="3D Printing Services in Hyderabad">
                  Hyderabad
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "#dfdfdf" }} />
        <div className="container-fluid">
          <div className="footer-logos">
            <a href="https://www.linkedin.com/company/10662991/">
              <img
                src={linkedinIcon}
                height="22px"
                width="22px"
                alt="linkedin"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCbTv_7ApLU1zerBHzySX0xg">
              <img src={youtubeIcon} height="22px" width="22px" alt="youtube" />
            </a>
            <a href="https://www.instagram.com/makerglobal3d/">
              <img src={instaIcon} height="18px" width="18px" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/makerglobal3d/">
              <img
                src={facebookIcon}
                height="20px"
                width="18px"
                alt="facebook"
              />
            </a>
            <a href="https://twitter.com/makerglobal3d">
              <img
                className="social-icon"
                src={twitterIcon}
                height="20px"
                width="20px"
                alt="twitter"
              />
            </a>
          </div>
          <div className="footer-text">
            <p id="copyright-text">© Copyright - Since 2016 Maker Global |</p>
            <p className="all-rights-line">All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}