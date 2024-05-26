import React from "react";

import icon1 from "../assets/images/whatsapp-icon.png";
import icon2 from "../assets/images/DOWNLOAD (1).webp";
import pdf from "../assets/pdf/maker-global-company-profile.pdf";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/message/I6AAM2FS77U7F1"
        target="_blank"
        rel="noopener noreferrer">
        <img className="float1" src={icon1} alt="Let's Talk on WhatsApp" />
      </a>

      <a
        href={pdf}
        className="float2"
        target="_blank"
        id="pdfButton"
        rel="noopener noreferrer"
        download="Maker_Global_Company_Profile.pdf">
        <img src={icon2} className="float-image" alt="Company Brochure" />
      </a>
    </div>
  );
};

export default FloatingButtons;
