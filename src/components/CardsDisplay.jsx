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

const firstRow = [
  {
    imgSrc: offering1,
    title: "3D Printing",
  },
  {
    imgSrc: offering2,
    title: "3D Printers",
  },
  {
    imgSrc: offering3,
    title: "Scale Models",
  },
  {
    imgSrc: offering4,
    title: "CAD Designing",
  },
];

const secondRow = [
  {
    imgSrc: offering5,
    title: "CNC Machining",
  },
  {
    imgSrc: offering6,
    title: "Vaccum Casting",
  },
  {
    imgSrc: offering7,
    title: "Reverse Engineering",
  },
  {
    imgSrc: offering8,
    title: "Injection Molding",
  },
];

export default function CardsDisplay() {
  return (
    <div className="container" id="cards-container">
      <div className="container section-heading color-line">
        <h1 id="section-title">OUR OFFERINGS</h1>
      </div>

      <div className="row" id="offerings-first-row">
        {/* // generating the cards using the map function */}

        {firstRow.map((item) => (
          <CardComponent imgSrc={item.imgSrc} title={item.title} />
        ))}
      </div>

      <div className="row" id="offerings-first-row">
        {secondRow.map((item) => (
          <CardComponent imgSrc={item.imgSrc} title={item.title} />
        ))}
      </div>
    </div>
  );
}
