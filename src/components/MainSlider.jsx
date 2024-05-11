import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import slide1 from "../assets/images/slide1.webp";
import slide3 from "../assets/images/slide3.webp";
import slide4 from "../assets/images/slide4.jpg";
import video1 from "../assets/images/video1.webm";
import mobileSlide1 from "../assets/images/mobile-slider1.webp";
import mobileSlide2 from "../assets/images/mobile-slider2.webp";
import mobileSlide3 from "../assets/images/mobile-slider3.jpg";
import mobileSlideVideo from "../assets/images/mobile-slider_1_.webm";

export default function MainSlider() {
  return (
    <>
      <div class="container-fluid d-none d-md-block" id="main-slider">
        <OwlCarousel
          items={1}
          className="owl-theme "
          loop
          nav
          autoplayTimeout={5500}
          autoplaySpeed={5000}
          autoplay
          dots={false}
          margin={0}>
          <div>
            <img className="img" src={slide1} />
          </div>
          <div>
            <video width="100%" muted autoPlay playsInline loop>
              <source src={video1} type="video/webm" />
            </video>
          </div>
          <div>
            <img className="img" src={slide3} />
          </div>
          <div>
            <img className="img" src={slide4} />
          </div>
        </OwlCarousel>
      </div>
      {/* carousel at mobile view */}
      <div class="container-fluid d-md-none" id="mobile-slider">
        <OwlCarousel
          items={1}
          className="owl-theme "
          loop
          nav={false}
          autoplayTimeout={5000}
          autoplay
          dots
          margin={15}>
          <div>
            <img className="img" src={mobileSlide1} />
          </div>
          <div>
            <video width="100%" muted autoPlay playsInline loop>
              <source src={mobileSlideVideo} type="video/webm" />
            </video>
          </div>
          <div>
            <img className="img" src={mobileSlide2} />
          </div>
          <div>
            <img className="img" src={mobileSlide3} />
          </div>
        </OwlCarousel>
      </div>

      <div className="container" id="about-section">
        <div className="row">
          <div className="col-sm-5">
            <div className="iframe-container" id="embed-video">
              <iframe
                id="Yvideo"
                width="100%"
                height="97%"
                src="https://www.youtube.com/embed/bAaka3cZayg?si=G6RpjaJHulEiWiqd"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
          <div className="col-sm-7 about-headlines">
            <h4>
              <b style={{ color: "#7bc74d" }}>ABOUT US</b>
            </h4>
            <h3>
              Welcome to <b style={{ color: "#7bc74d" }}>MAKER GLOBAL</b>
            </h3>
            <p id="about-content">
              Maker Global is in its successful 8th year, focusing on giving
              ultimate solutions in Additive Manufacturing (3D Printing) &amp;
              Product Developments. We are a very skilled, passionate team of
              Mechanical Engineers. We emerged as India’s fast-growing company
              in providing One Door solutions from
              <strong>
                <b>
                  <em>"Idea to Product" or "Prototype to Production ".</em>
                </b>
              </strong>
            </p>
            <button className="btn btn-primary" id="Read-more-btn">
              {/* <a href="pages/about.html" target="_blank"> */}
              <span> READ MORE ... </span>
              {/* </a> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
