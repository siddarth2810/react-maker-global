import { useState } from 'react'
import HeaderAndNav from './components/HeaderAndNav'
import './App.css'
import RenderName from './components/RenderName';
import { Link } from "react-router-dom";
import MainSlider from './components/MainSlider';
import CardsDisplay from './components/CardsDisplay';


function App() {
  //for hiding top header on scroll down
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
const animals = ["Lion", "Cow", "Snake", "Lizard"];

  const [count, setCount] = useState(0)

  return (
    <>
     < HeaderAndNav />
     < MainSlider/>
     < CardsDisplay/>
      < RenderName />

      {/* <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
    
          <Link to="profile">Profile page</Link>
        
       
        </ul>
      </nav>
    </div> */}



    </>
  )
}


export default App
