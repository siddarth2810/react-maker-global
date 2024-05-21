import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HeaderAndNav from "../components/HeaderAndNav";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderAndNav />
      <div class="container-fluid" id="about-page-container">
        <div className="policies-heading">
          <h2>Privacy Policy</h2>
        </div>

        <div class="container-fluid" id="industries-page-content">
          <p>
            This privacy policy sets out how Maker Global uses and protects any
            information that you give Maker Global when you use this website.
          </p>

          <p>
            Maker Global is committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information by which
            you can be identified when using this website, and then you can be
            assured that it will only be used in accordance with this privacy
            statement. Maker Global may change this policy from time to time by
            updating this page. You should check this page from time to time to
            ensure that you are happy with any changes.
          </p>

          <h4>We may collect the following information:</h4>
          <p>Name and job title</p>
          <p>Contact information including email address</p>
          <p>
            Demographic information such as postcode, preferences and interests.
            Other information relevant to customer surveys and/or offers
          </p>

          <h4>What we do with the information we gather</h4>
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
            Internal record keeping. We may use the information to improve our
            products and services. We may periodically send promotional emails
            about new products, special offers or other information which we
            think you may find interesting using the email address which you
            have provided. From time to time, we may also use your information
            to contact you for market research purposes. We may contact you by
            email, phone, fax or mail. We may use the information to customize
            the website according to your interests.
          </p>

          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorized access or disclosure we have put in
            suitable measures.
          </p>

          <h4>How we use cookies</h4>
          <p>
            A cookie is a small file which asks permission to be placed on your
            computer's hard drive. Once you agree, the file is added and the
            cookie helps analyze web traffic or lets you know when you visit a
            particular site. Cookies allow web applications to respond to you as
            an individual. The web application can tailor its operations to your
            needs, likes and dislikes by gathering and remembering information
            about your preferences. We use traffic log cookies to identify which
            pages are being used. This helps us analyze data about webpage
            traffic and improve our website in order to tailor it to customer
            needs. We only use this information for statistical analysis
            purposes and then the data is removed from the system. Overall,
            cookies help us provide you with a better website, by enabling us to
            monitor which pages you find useful and which you do not. A cookie
            in no way gives us access to your computer or any information about
            you, other than the data you choose to share with us. You can choose
            to accept or decline cookies. Most web browsers automatically accept
            cookies, but you can usually modify your browser setting to decline
            cookies if you prefer. This may prevent you from taking full
            advantage of the website.
          </p>

          <h4>Controlling your personal information</h4>
          <p>
            You may choose to restrict the collection or use of your personal
            information in the following ways: whenever you are asked to fill in
            a form on the website, look for the box that you can click to
            indicate that you do not want the information to be used by anybody
            for direct marketing purposes. If you have previously agreed to us
            using your personal information for direct marketing purposes, you
            may change your mind at any time by writing to or emailing us at
            info@makerglobal.in. We will not sell, distribute or lease your
            personal information to third parties unless we have your permission
            or are required by law to do so. We may use your personal
            information to send you promotional information about third parties
            which we think you may find interesting if you tell us that you wish
            this to happen. If you believe that any information we are holding
            on you is incorrect or incomplete, please write to or email us as
            soon as possible, at the above address. We will promptly correct any
            information found to be incorrect.
          </p>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
