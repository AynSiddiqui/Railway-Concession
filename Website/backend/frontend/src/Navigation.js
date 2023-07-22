import React from "react";
import { Link } from "react-router-dom";
import NavigationImage from "./NavigationImage.png";
import Pdf from "./Documentation.pdf";
import "./Navigation.css";

function handleLogout() {
  // Remove the token from local storage
  localStorage.removeItem("token");
  // sessionStorage.clear();
  // Redirect the user to the desired location
  window.location = "/";
}

function Navigation() {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("token");

  return (
    <div className="dark:bg-gray-400">
      <nav className="flex flex-row items-center h-16 px-4">
        {isAuthenticated ? (
          <>
            <img
              src={NavigationImage}
              className="h-16 animate-bounce"
              alt=""
            ></img>
            <Link
              to="/slip"
              className="ml-4 text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2"
            >
              Slip
            </Link>
          </>
        ) : (
          <img
            src={NavigationImage}
            className="h-16 animate-bounce"
            alt=""
          ></img>
        )}

        <div className="flex ml-auto items-center space-x-4">
          <Link
            to="/"
            className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
          >
            Home
          </Link>
          <a
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
            download
          >
            Documentation
          </a>

          {isAuthenticated ? (
            <>
              <Link
                to="/ApplicationForm"
                className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
              >
                Application Form
              </Link>
              <Link
                to="/ApplicationFormEdit"
                className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
              >
                Edit Form
              </Link>
              <Link
                to="/renewal"
                className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
              >
                Renew Application
              </Link>
              <button
                className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/SignUp"
                className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
              >
                Sign Up
              </Link>
              <Link
                to="/Login"
                className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
