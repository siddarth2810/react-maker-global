import React from "react";
import telephoneIcon from "../assets/icons/telephone.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import emailIcon from "../assets/icons/email.png";
import Navbar_brand_icon from "../assets/icons/main-icon.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="TopHeader container" id="TopHeader">
          <div className="wrapper">
            <div className="contact-info-two">
              <a href="tel://+918341316555">
                <img
                  src={telephoneIcon}
                  className="header-icon"
                  alt="call-makerglobal"
                />
                +91 8341316555 (IVR)
              </a>
            </div>

            <div className="contact-info-one">
              <a href="https://wa.me/message/I6AAM2FS77U7F1" target="_blank">
                <img
                  src={whatsappIcon}
                  className="header-icon"
                  alt="whatsapp-makerglobal"
                />
                +91 9629440854
              </a>
            </div>
          </div>
          <div className="header-mail">
            <a href="mailto:info@makerglobal.in">
              <img
                src={emailIcon}
                className="header-icon"
                alt="email-makerglobal"
              />
              Info@makerglobal.in
            </a>
          </div>
        </div>

        <section className="navigation-section" id="title" data-scroll>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark" id="barnav">
              <img
                src={Navbar_brand_icon}
                className="MainLogo"
                alt="makerglobal-company-logo"
              />
              <Link className="navbar-brand" to="/">
                MAKER GLOBAL
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/AboutPage">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Our Offerings
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/RapidPrototyping">
                          Rapid Prototyping
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/threeDPrinting">
                          3D Printers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/ScaleModels">
                          Scale Models
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/MetalPrinting">
                          Metal 3D Printing
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/RamLalla6">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Careers">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item contact-nav">
                    <a className="nav-link" href="#features">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
}
