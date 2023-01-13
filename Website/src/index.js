import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './home.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Application from './Aform.js';
import Navigation from './Navigation.js';
import reportWebVitals from './reportWebVitals';

const WebPages = () => {
  document.title = "Railway Concession";
  return (
    <section className="listofwebpages">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ApplicationForm" element={<Application />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <SignUp /> */}
    {/* <Application /> */}
    {/* <Home /> */}
    <WebPages />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
