import React from "react";
import telephoneIcon from "../assets/icons/telephone.png";
import whatsappIcon from "../assets/icons/vector.svg";
import emailIcon from "../assets/icons/email.png";
import mapPin from "../assets/icons/pin-fill.svg";

export default function ContactUs() {
  return (
    <>
      <section id="features">
        <div className="container-fluid contact-container" tabIndex="0">
          <div className="row">
            <div
              className="feature-box col-lg-4 work-pls"
              style={{ backgroundColor: "#dddddd" }}>
              <div className="first-image img">
                <img src={mapPin} className="map-icon-img" alt="" />
              </div>
              <div className="location-content">
                <h5 className="feature-title">
                  {" "}
                  <strong>
                    <b>Maker Global</b>
                  </strong>
                </h5>
                <p>
                  Imperial Plaza, 203, Panjagutta Officers colony, Hyderabad,{" "}
                  Telangana-500082
                </p>
              </div>
            </div>

            <div
              className="map col-lg-4 work-pls"
              style={{ backgroundColor: "#e7e7e7" }}>
              <div className="telephone-container" style={{ display: "flex" }}>
                <div className="contact-telephone-img-div">
                  <img
                    src={telephoneIcon}
                    className="contact_us_icons img"
                    alt=""
                  />
                </div>
                <div className="map-content ivr-number">
                  <h5 className="feature-title">+91 8341316555 (IVR)</h5>
                </div>
              </div>

              <div className="whatsapp-container" style={{ display: "flex" }}>
                <div className="contact-whatsapp-img-div">
                  <img
                    src={whatsappIcon}
                    className="contact_us_icons img2"
                    alt=""
                  />
                </div>
                <div className="map-content second-number">
                  <h5 className="feature-title">+91 9629440854</h5>
                </div>
              </div>
            </div>

            <div
              className="mail col-lg-4 work-pls"
              style={{ backgroundColor: "#f4f4f4" }}>
              <div className="mail-image">
                <img
                  src={emailIcon}
                  className="contact_us_icons img"
                  id="mail-icon"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src={emailIcon}
                  className="contact_us_icons img"
                  id="mail-icon2"
                  alt=""
                />
              </div>

              <div className="mail-text">
                <h5 className="feature-title mail-title1">
                  <a
                    className="makerglobal-mail-id"
                    href="mailto:info@makerglobal.in">
                    <u>Info@makerglobal.in</u>{" "}
                  </a>
                  <p>For business queries</p>
                </h5>
                <h5 className="feature-title mail-title2">
                  <a
                    className="makerglobal-mail-id"
                    href="mailto:info@makerglobal.in">
                    <u>print@makerglobal.in</u>
                  </a>
                  <p> (RFQ/Rapid Prototyping) </p>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-sm-12">
        <div className="iframe-container">
          <strong>
            <iframe
              height="330px"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6335273550544!2d78.45227151412125!3d17.429366206182394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a4a3959425%3A0xff797c9d1190cc11!2sMaker+Global+-+The+3D+Printing+Company+(+3D+Printers%2C+3D+Printing+Services%2C+Etc)!5e0!3m2!1sen!2sin!4v1522299321411"
              style={{ border: "0" }}
              width="100%"></iframe>
          </strong>
        </div>
      </div>
    </>
  );
}
