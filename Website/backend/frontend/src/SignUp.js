import React from "react";
import "./SignUp.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMesssge";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [regId, setregId] = useState("");
  const [phnNumber, setphnNumber] = useState("");
  const [error, setError] = useState(false);
  // const[loading,setLoading] = useState(false)
  const [message, setMessage] = useState("");
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set a delay of 100ms to show the page content after the fade-in effect
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Passwords Do not match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        //setLoading(true)
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/createUser",
          {
            email: email,
            regId: regId,
            fullname: fullname,
            phnNumber: phnNumber,
            password: password,
            confirmpassword: confirmpassword,
          },
          config
        );
        //    setLoading(false)

        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        window.location = "/login";
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Navigation />
      <div className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-picSignUp">
        {/* <div className="h-screen flex justify-center items-center bgimage"> */}
        <div
          className={`bg-white w-[900px] h-[520px] rounded-3xl flex flex-col space-y-10 justifiy-center items-center transition-opacity duration-1000 ${
            isPageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl text-black font-bold mt-8">Sign Up</h1>
          <form className="flex flex-col space-y-10 justify-center items-center">
            <div className="my-1 flex space-x-10">
              <div>
                <label
                  htmlFor="email"
                  className="text-xl text-purple-violent font-bold"
                >
                  Email ID:{" "}
                </label>
                <input
                  type="email"
                  pattern=".+@[A-Za-z0-9.-]+\.vjti.ac.in"
                  name="title"
                  className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:dark:bg-gray-900 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="registrationid"
                  className="text-xl text-purple-violent font-bold"
                >
                  Registration ID:{" "}
                </label>
                <input
                  type="number"
                  maxLength={9}
                  name="registrationid"
                  className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:dark:bg-gray-900 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setregId(e.target.value)}
                  value={regId}
                  minLength={10}
                ></input>
              </div>
            </div>
            <div className="my-1 flex space-x-10">
              <div>
                <label
                  htmlFor="name"
                  className="text-xl text-purple-violent font-bold"
                >
                  Full Name:{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:dark:bg-gray-900 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullname}
                  minLength={3}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="phonenumber"
                  className="text-xl text-purple-violent font-bold"
                >
                  Phone Number:{" "}
                </label>
                <input
                  type="tel"
                  name="phonenumber"
                  className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:dark:bg-gray-900 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setphnNumber(e.target.value)}
                  value={phnNumber}
                  minLength={10}
                  maxLength={10}
                ></input>
              </div>
            </div>
            <div className="my-1 flex space-x-10">
              <div>
                <label
                  htmlFor="password"
                  className="text-xl text-purple-violent font-bold"
                >
                  Password:{" "}
                </label>
                <input
                  type="password"
                  name="password"
                  className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:dark:bg-gray-900 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  minLength={5}
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="text-xl text-purple-violent font-bold"
                >
                  Confirm Password:{" "}
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:dark:bg-gray-900 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmpassword}
                  minLength={5}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-block w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:dark:bg-gray-900 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
          <div className="my-1 text-white">
            <p className="text-xl text-black">Already have account?</p>
            <Link
              to="/Login"
              className="text-2xl text-black text-center underline cursor-pointer hover:dark:bg-gray-900 hover:text-white"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
