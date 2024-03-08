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

export default function CardsDisplay() {
  return (
    <div className="container" id="CardComponents-container">
      <div className="container section-heading color-line">
          <h1 id="section-title">OUR OFFERINGS</h1>
      </div>

      <div className="row" id="offerings-first-row">
          <CardComponent imgSrc={offering1} title="3D Printing" />
          <CardComponent imgSrc={offering2} title="3D Printers" />
          <CardComponent imgSrc={offering3} title="Scale Models" />
          <CardComponent imgSrc={offering4} title="CAD Designing" />
      </div>

      <div className="row" id="offerings-first-row">
          <CardComponent imgSrc={offering5} title="CNC Machining" />
          <CardComponent imgSrc={offering6} title="Vaccum Casting" />
          <CardComponent imgSrc={offering7} title="Reverse Engineering" />
          <CardComponent imgSrc={offering8} title="Injection Molding" />
      </div>
    </div>
  );
}

