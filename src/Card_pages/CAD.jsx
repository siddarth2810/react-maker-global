import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";
import CADImage from "../assets/images/CAD.png";

const CAD = () => {
  return (
    <>
      <HeaderAndNav />
      <div class="container-fluid" id="about-page-container">
        <div class="three">
          <h1>CAD Designing</h1>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src={CADImage} style={{ height: "97%", width: "100%" }} />
          </div>

          <div class="col-lg-8 " id="industries-page-content">
            <p>
              One critical application of 3D printing in our operations is the
              production of complex CAD components. Utilizing advanced printing
              techniques and CAD-grade materials, we manufacture intricate parts
              with precise geometries that were once impossible or economically
              unfeasible through traditional methods. This not only enhances the
              overall efficiency of aircraft but also contributes to significant
              weight savings, a critical factor in CAD engineering. In the realm
              of rapid prototyping, 3D printing enables swift iterations and
              validation of designs for various CAD components. This accelerates
              the development process, reduces lead times, and ensures that
              final products meet the stringent standards of the CAD industry.
            </p>
            <p>
              Furthermore, our company leverages 3D printing for the creation of
              specialized, high-performance components such as turbine blades
              and fuel nozzles. The technology allows for the production of
              intricate and optimized structures, improving aerodynamics and
              fuel efficiency.
              <br />
            </p>

            <p>
              Our commitment to technical excellence is underscored by the
              selection of advanced, high-temperature materials suitable for CAD
              applications. These materials ensure the durability and
              reliability of 3D-printed components in the demanding conditions
              of CAD operations.
            </p>
            <p>
              In essence, our strategic integration of 3D printing in the CAD
              industry signifies a commitment to pushing the boundaries of
              technical innovation, precision engineering, and lightweight
              design. By seamlessly incorporating additive manufacturing into
              our CAD manufacturing pipeline, we position ourselves as leaders
              in shaping the future of aviation technology.
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default CAD;
