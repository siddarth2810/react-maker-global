import React from "react";

export default function CardComponent({ href, imgSrc, title }) {
  return (
    <>
      <div className="col-lg-3 col-6">
        <div className="card">
          {/* <a href={href}> */}
          <img src={imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              {title}
            </h5>
          </div>
          {/* </a> */}
        </div>
      </div>
    </>
  );
}
