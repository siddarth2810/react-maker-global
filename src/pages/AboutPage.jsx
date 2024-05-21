import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import founderImage from "../assets/images/founder.jpg";
import { Link } from "react-router-dom";
import "./styles/AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <HeaderAndNav />
      <div className="container-fluid" id="about-page-container">
        <div className="about-page-main-title">
          <h2>We Help our clients Build Prototypes & Kickstart Quicker !</h2>
        </div>
        <div className="row">
          <div className="video-container col-lg-4" id="embed-video">
            <div className="about-page-second-title ">
              <h1>Get to know about us</h1>
            </div>
            <div className="iframe-container" id="embed-video">
              <iframe
                id="Yvideo"
                width="100%"
                height="97%"
                src="https://www.youtube.com/embed/bAaka3cZayg?si=G6RpjaJHulEiWiqd"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div id="founder-card" style={{ display: "none" }}>
              <div id="founder-image-container">
                <img src={founderImage} />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <b>Kraveenthar Kamal</b>
                </h5>
                <p className="card-text">Founder, Mechanical Engineer</p>
                <p className="card-text">+91 9629440854</p>
                <p className="card-text">
                  {" "}
                  <a
                    className="makerglobal-mail-id"
                    href="mailto:info@makerglobal.in"
                    style={{ color: "black" }}>
                    Info@makerglobal.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 " id="about-page-content">
            <p>
              Maker Global is in its successful 8th year, focusing on giving
              ultimate solutions in Additive Manufacturing (3D Printing) &
              Product Developments. We are a very skilled, passionate team of
              Mechanical Engineers. Our journey began on July 27th 2016 in
              Hyderabad, India- with making & launching a 3D Printer to market,
              Later various 3D Printing associated services were added to the
              portfolio and now we emerged as India’s fast-growing company in
              providing One Door solutions from
              <strong>
                <b>
                  <em>"Idea to Product " Or "Prototype to Production "</em>
                </b>
              </strong>
              . We serve Pan India with a physical location in Hyderabad (HQ) &
              Bangalore and soon one in Chennai.
              <br />
            </p>
            <p>
              Our Customers range from students, Startups, MNCs and Government
              Bodies from all industries like Engineering, Manufacturing,
              Architecture, Medical, Aerospace Etc. Our Services Includes
              Product Developments (Mechanical & Electronics), 3D Printing, 3D
              Modeling, 3D Scanning, Rapid prototyping, Scale model making, Low
              volume production, CNC & Molding, Reverse Engineering, Workshops &
              Training on Additive Manufacturing. We also develop Technological
              products for various Indian Army & Defence Organisations in
              Manufacturing and Robotics.
              <br />{" "}
            </p>

            <p>
              <strong>
                <b>Vision Statement:</b>
              </strong>{" "}
              To become India’s Most Reputable company in the stream of “Rapid
              Prototyping & Maker space”
              <br />
            </p>
            <p>
              <strong>
                <b>Mission Statement: </b>
              </strong>
              To offer complete design and manufacturing solutions to all the
              makers and companies across all sectors and stages of Product
              Innovations.
              <br />
            </p>
          </div>

          <div id="founder-card">
            <div id="founder-image-container">
              <img src={founderImage} />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <b>Kraveenthar Kamal</b>
              </h5>
              <p className="card-text">Founder, Mechanical Engineer</p>
              <p className="card-text">+91 9629440854</p>
              <p className="card-text">
                {" "}
                <a
                  className="makerglobal-mail-id"
                  href="mailto:info@makerglobal.in"
                  style={{ color: "black" }}>
                  Info@makerglobal.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactUs />
      <Footer />
    </>
  );
};

export default AboutPage;
