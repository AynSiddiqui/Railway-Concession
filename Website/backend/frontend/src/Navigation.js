import React from "react";
import { Link } from "react-router-dom";
import NavigationImage from "./NavigationImage.png";
import Pdf from "./Documentation.pdf";
import "./Navigation.css";

function handleLogout() {
  // Remove the token from local storage
  localStorage.removeItem("token");
  localStorage.removeItem("regId");
  // Redirect the user to the desired location
  window.location = "/";
}

function Navigation() {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("token");

  return (
    <>
      <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 ">
        <nav className="flex flex-row h-16 ">
          <img
            src={NavigationImage}
            className="h-16 pl-4 pt-3 animate-bounce"
            alt=""
          ></img>

          <Link
            to="/slip"
            className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
          >
            Slip
          </Link>

          <div className="flex list-none my-auto ml-[800px] space-x-16">
            <Link
              to="/"
              className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg hover:cursor-pointer"
            >
              Home
            </Link>
            <a
              href={Pdf}
              target="blank"
              className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
              download
            >
              Documentation
            </a>

            {isAuthenticated ? (
              <>
                <Link
                  to="/ApplicationForm"
                  className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg hover:cursor-pointer"
                >
                  Application Form
                </Link>
                <button
                  className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/SignUp"
                  className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
                >
                  Sign Up
                </Link>
                <Link
                  to="/Login"
                  className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
