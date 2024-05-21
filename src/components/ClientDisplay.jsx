import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

// Importing images

// const clients = [];
// for(let i=1; i<=21; i++){
//   clients.push({
//     imgSrc: require(`../assets/Client logos/${i}.png`).default
//   });
// }

import client1 from "../assets/Client logos/1.png";
import client2 from "../assets/Client logos/2.png";
import client3 from "../assets/Client logos/3.png";
import client4 from "../assets/Client logos/4.png";
import client5 from "../assets/Client logos/5.png";
import client6 from "../assets/Client logos/6.png";
import client7 from "../assets/Client logos/7.png";
import client8 from "../assets/Client logos/8.png";
import client9 from "../assets/Client logos/9.png";
import client10 from "../assets/Client logos/10.png";
import client11 from "../assets/Client logos/11.png";
import client12 from "../assets/Client logos/12.png";
import client13 from "../assets/Client logos/13.png";
import client14 from "../assets/Client logos/14.png";
import client15 from "../assets/Client logos/15.png";
import client16 from "../assets/Client logos/16.png";
import client17 from "../assets/Client logos/17.png";
import client18 from "../assets/Client logos/18.png";
import client19 from "../assets/Client logos/19.png";
import client20 from "../assets/Client logos/20.png";
import client21 from "../assets/Client logos/21.png";

import AerospaceImageAtHomePage from "../assets/industries-we-serve/Aerospace.png";
import AutomotiveImageAtHomePage from "../assets/industries-we-serve/Automotive.png";
import ArchitectureImageAtHomePage from "../assets/industries-we-serve/Architecture.png";
import MoviesImageAtHomePage from "../assets/industries-we-serve/Movies.png";
import JewelleryImageAtHomePage from "../assets/industries-we-serve/Jewellery.png";
import ManufacturingImageAtHomePage from "../assets/industries-we-serve/Manufacturing.png";
import DentalImageAtHomePage from "../assets/industries-we-serve/Dental.png";
import OilAndGasImageAtHomePage from "../assets/industries-we-serve/OilAndGas.png";

const industries = [
  {
    imgSrc: AerospaceImageAtHomePage,
    destination: "/Aerospace",
  },
  {
    imgSrc: ArchitectureImageAtHomePage,
    destination: "/Architecture",
  },
  {
    imgSrc: AutomotiveImageAtHomePage,
    destination: "/Automotive",
  },
  {
    imgSrc: JewelleryImageAtHomePage,
    destination: "/Jewellery",
  },
  {
    imgSrc: DentalImageAtHomePage,
    destination: "/Dental",
  },
  {
    imgSrc: ManufacturingImageAtHomePage,
    destination: "/Manufacturing",
  },
  {
    imgSrc: MoviesImageAtHomePage,
    destination: "/Movies",
  },
  {
    imgSrc: OilAndGasImageAtHomePage,
    destination: "/OilAndGas",
  },
];

const clients = [
  {
    imgSrc: client1,
  },
  {
    imgSrc: client2,
  },
  {
    imgSrc: client3,
  },
  {
    imgSrc: client4,
  },
  {
    imgSrc: client5,
  },
  {
    imgSrc: client6,
  },
  {
    imgSrc: client7,
  },
  {
    imgSrc: client8,
  },
  {
    imgSrc: client9,
  },
  {
    imgSrc: client10,
  },
  {
    imgSrc: client11,
  },
  {
    imgSrc: client12,
  },
  {
    imgSrc: client13,
  },
  {
    imgSrc: client14,
  },
  {
    imgSrc: client15,
  },
  {
    imgSrc: client16,
  },
  {
    imgSrc: client17,
  },
  {
    imgSrc: client18,
  },
  {
    imgSrc: client19,
  },
  {
    imgSrc: client20,
  },
  {
    imgSrc: client21,
  },
];

export default function ClientDisplay() {
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="container section-heading">
            <h1 id="section-title">OUR CLIENTS</h1>
          </div>

          <div
            className="row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2"
            id="client-carousel"
            style={{ padding: "25px 5px", margin: 0 }}>
            <OwlCarousel
              items={1}
              className="owl-theme "
              loop
              rrtl={true}
              dots={false}
              nav={false}
              autoplay={true}
              autoplaySpeed={5000}
              autoplayHoverPause={false}
              responsive={{
                0: {
                  items: 3,
                  dots: false,
                  margin: 0,
                },
                600: {
                  items: 3,
                },
                768: {
                  items: 4,
                },
                992: {
                  items: 4,
                },
                1200: {
                  items: 6,
                },
              }}>
              {clients.map((item, index) => (
                <figure key={index}>
                  <img
                    src={item.imgSrc}
                    alt={`brand ${index + 1}`}
                    className="client-logo"
                  />
                </figure>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section id="portfolio1">
        <div className="container">
          <div className="container section-heading color-line">
            <h1 id="section-title">INDUSTRIES WE SERVE</h1>
          </div>

          <div className="row " id="industries-carousel">
            <OwlCarousel
              className="owl-theme "
              loop
              nav={false}
              autoplayTimeout={3000}
              autoplay
              dots={false}
              responsive={{
                0: {
                  items: 2,
                },
                600: {
                  items: 2,
                },
                768: {
                  items: 4,
                },
                992: {
                  items: 4,
                },
              }}>
              {industries.map((item) => (
                <div>
                  <Link to={item.destination}>
                    <img src={item.imgSrc} className="industry-logo" />
                  </Link>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
