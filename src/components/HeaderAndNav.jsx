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
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-none d-lg-flex"
                id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/AboutPage">
                      About
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
                        <a
                          className="dropdown-item"
                          href="pdf/SCALE MODELS.pdf"
                          target="_blank"
                          rel="noopener noreferrer">
                          Scale Models
                        </a>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/MetalPrinting">
                          Metal 3D Printing
                        </Link>
                      </li>
                    </ul>
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

          {/* sidebar start */}

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <img
                src={Navbar_brand_icon}
                className="MainLogo"
                alt="makerglobal-company-logo"
              />
              <a className="nav-link" href="/">
                Maker Global
              </a>
              <button
                style={{
                  backgroundColor: "e7e7e7",
                }}
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/AboutPage">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Our Offerings
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown">
                    <li>
                      <a className="nav-link" href="/RapidPrototyping">
                        Rapid Prototyping
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/threeDPrinting">
                        3D Printers
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="pdf/SCALE MODELS.pdf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Scale Models
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/MetalPrinting">
                        Metal 3D Printing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Careers">
                    Careers
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link "
                    href="#features"
                    style={{ color: "#7bc74d " }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
