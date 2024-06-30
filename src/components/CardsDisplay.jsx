import React from "react";
import CardComponent from "./CardComponent"; // Adjust the path as necessary
// Importing images
import offering1 from "../assets/images/offering--1.webp";
import offering2 from "../assets/images/offering--2.webp";
import offering3 from "../assets/images/offering--3.webp";
import offering4 from "../assets/images/offering--4.webp";
import offering5 from "../assets/images/offering--5.webp";
import offering6 from "../assets/images/offering--6.webp";
import offering7 from "../assets/images/offering--7.webp";
import offering8 from "../assets/images/offering--8.webp";
import { Link, Outlet } from "react-router-dom";
import ScrollToTopOnMount from "./ScrollToTopOnMount.jsx";

const firstRow = [
  {
    imgSrc: offering1,
    title: "3D Printing",
    destination: "/RapidPrototyping",
  },
  {
    imgSrc: offering2,
    title: "3D Printers",
    destination: "/ThreeDPrinting",
  },
  {
    imgSrc: offering3,
    title: "Scale Models",
    destination: "/ScaleModels",
  },
  {
    imgSrc: offering4,
    title: "CAD Designing",
    destination: "/CAD",
  },
];

const secondRow = [
  {
    imgSrc: offering7,
    title: "CNC Machining",
    destination: "/CNC",
  },
  {
    imgSrc: offering6,
    title: "Vaccum Casting",
    destination: "/VaccumCasting",
  },
  {
    imgSrc: offering5,
    title: "Reverse Engineering",
    destination: "/ReverseEngineering",
  },
  {
    imgSrc: offering8,
    title: "Injection Molding",
    destination: "/InjectionMoulding",
  },
];

export default function CardsDisplay() {
  return (
    <>
      <ScrollToTopOnMount />
      <Outlet />
      <div className="container" id="cards-container">
        <div className="container section-heading ">
          <h1 id="section-title">OUR OFFERINGS</h1>
        </div>

        <div className="row" id="offerings-first-row">
          {/* // generating the cards using the map function */}
          {firstRow.map((item) => (
            <Link to={item.destination} className="col-lg-3 col-6">
              <CardComponent
                className="cardComponent"
                imgSrc={item.imgSrc}
                title={item.title}
              />
            </Link>
          ))}
        </div>

        <div className="row" id="offerings-first-row">
          {secondRow.map((item) => (
            <Link to={item.destination} className="col-lg-3 col-6">
              <CardComponent
                className="cardComponent"
                imgSrc={item.imgSrc}
                title={item.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
