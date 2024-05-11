import { useState } from "react";
import HeaderAndNav from "./components/HeaderAndNav";
import "./App.css";
import RenderName from "./components/RenderName";
import { Link, createBrowserRouter } from "react-router-dom";
import MainSlider from "./components/MainSlider";
import CardsDisplay from "./components/CardsDisplay";
import ClientDisplay from "./components/ClientDisplay";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  //   //for hiding top header on scroll down
  let prevScrollPos = window.scrollY;
  window.onscroll = function () {
    const topHeader = document.getElementById("TopHeader");
    const Header = document.getElementById("header-container");
    const currentScrollPos = window.scrollY;

    if (prevScrollPos < currentScrollPos) {
      topHeader.style.display = "none";
    } else if (currentScrollPos === 0) {
      topHeader.style.display = "flex";
    }
    prevScrollPos = currentScrollPos;
  };

  //slider of index.html

  return (
    <>
      <HeaderAndNav />
      <MainSlider />
      <CardsDisplay />
      <ClientDisplay />
      <ContactUs />
      <Footer />
      {/* < RenderName /> */}

      {/* <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <Link to="profile">Profile page</Link>
          </ul>
        </nav>
      </div>

      <h1>les see if this is working </h1>
      <Link to="profile">Profile page</Link> */}
    </>
  );
}

export default App;

// import { Link } from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//       <h1>Hello from the main page of the app!</h1>
//       <p>Here are some examples of links to other pages</p>
//       <nav>
//         <ul>
//           <li>
//             <Link to="profile">Profile page</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default App;
