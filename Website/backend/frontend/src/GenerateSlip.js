// import React from "react";
import Navigation from "./Navigation.js";
import React, { useState, useEffect } from "react";
import Footer from "./Footer.js";

function GenerateSlip() {
  const handleGenerateSlip = () => {
    // Logic for generating the slip
  };

  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set a delay of 100ms to show the page content after the fade-in effect
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  return (
    <div>
      <Navigation />
      <div
        className={`h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-picSignUp `}
      >
        {/* <div
          className={`bg-white w-[500px] h-[520px] rounded-3xl flex flex-col space-y-10 justifiy-center items-center transition-opacity duration-1000 ${
            isPageLoaded ? "opacity-100" : "opacity-0"
          }`}
        > */}
        {/* <h1 className="text-4xl text-black font-bold mt-8">Generate slip</h1> */}

        <button
          type="submit"
          className="inline-block px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:dark:bg-gray-900 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleGenerateSlip}
        >
          Generate slip
        </button>
      </div>
      {/* </div> */}
      {/* <h1>Generate Slip</h1>
      <button onClick={handleGenerateSlip}>Generate Slip</button> */}
      <Footer />
    </div>
  );
}

export default GenerateSlip;
