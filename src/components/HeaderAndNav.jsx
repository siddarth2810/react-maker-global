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

        {/* {  navigation bar } */}

        <section className="navigation-section" id="title" data-scroll>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark" id="barnav">
              <img
                src={Navbar_brand_icon}
                className="MainLogo"
                alt="makerglobal-company-logo"
              />
              <a className="navbar-brand" href="#">
                {" "}
                MAKER GLOBAL{" "}
              </a>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse d-none d-lg-flex"
                id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html" id="">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a>
                      <Link className="nav-link" to="/AboutPage">
                        About
                      </Link>
                    </a>
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
                        <a
                          className="dropdown-item"
                          href="pages/rapid-prototyping.html">
                          Rapid Prototyping
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages/3d-printers.html">
                          3D Printers
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pdf/SCALE MODELS.pdf"
                          target="_blank">
                          Scale Models
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages/metal-3d-printing.html">
                          Metal 3D Printing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a>
                      <Link className="nav-link" to="/Careers">
                        Careers
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item contact-nav">
                    <a className="nav-link" href="#features" id="">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* nav items end */}
            </nav>
          </div>
          {/* container tag end */}
        </section>
      </header>

      {/* sidebar start */}

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <div className="sidebar-brand">
            <img
              src={Navbar_brand_icon}
              className="MainLogo"
              alt="makerglobal-company-logo"
            />
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Maker Global
            </h5>
          </div>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <hr />
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
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a
                    className="dropdown-item"
                    href="pages/rapid-prototyping.html">
                    Rapid Prototyping
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="pages/3d-printers.html">
                    3D Printers
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pdf/SCALE MODELS.pdf"
                    target="_blank">
                    Scale Models
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="pages/metal-3d-printing.html">
                    Metal 3D Printing
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
              <hr />
            </li>
            <li className="nav-item">
              <a>
                <Link className="nav-link" to="/Careers">
                  Careers
                </Link>
              </a>
              <hr />
            </li>
            <li className="nav-item">
              <a>
                <Link className="nav-link" to="/AboutPage">
                  About
                </Link>
              </a>
              <hr />
            </li>

            <li className="nav-item">
              <a className="nav-link contact-sidebar" href="#features">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* sidebar items end */}
      </div>
      {/* sidebar end */}
    </>
  );
}
