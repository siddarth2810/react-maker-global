import { useState } from 'react'
import HeaderAndNav from './components/HeaderAndNav'
import './App.css'


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



  const [count, setCount] = useState(0)

  return (
    <>
     < HeaderAndNav />
    </>
  )
}

export default App
