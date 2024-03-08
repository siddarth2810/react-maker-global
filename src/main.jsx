import React from 'react'
import ReactDOM from 'react-dom/client'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'
import PropTypes from 'prop-types';
import './index.css'
// import Profile from './components/Profile.jsx'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HeaderAndNav from './components/HeaderAndNav.jsx'


// const router = createBrowserRouter([

  
//   // {
//   //   path: "/",
//   //   element: <App />,
//   // },
//   // {
//   //   path: "header",
//   //   element: <HeaderAndNav />,
//   //   children: [
//   //     {
    
//   //       path: "profile",
//   //       element: <Profile />,
//   //     },
//   //   ],
//   // },

// ]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
