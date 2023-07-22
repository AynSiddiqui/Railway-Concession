import React, { useState, useEffect } from "react";
import "./RenewForm.css";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";
import axios from "axios";
import ErrorMessage from "./ErrorMesssge";

import { v4 as uuidv4 } from "uuid";

function RenewalApplication() {
  const [ticketNo, setticketNo] = useState("");
  const [class2, setClass2] = useState();
  const [periodfrom, setPeriodFrom] = useState();
  const [periodto, setPeriodto] = useState();
  const [duration, setDuration] = useState();
  const [phnNumber, setphnNumber] = useState("");
  const [class1, setClass1] = useState("");
  const [selectedImage, setSelectImage] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [isPageLoaded, setPageLoaded] = useState(false);
  const loggedInUserRegId = localStorage.getItem("userRegId");
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    fetchUserDetails(loggedInUserRegId);
  }, [loggedInUserRegId]);
  const fetchUserDetails = async (regId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/formAuth/getformuser?regId=${regId}`
      );
      setUserDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Set a delay of 100ms to show the page content after the fade-in effect
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location = "/Login";
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      //setLoading(true)
      const { data } = await axios.post(
        `http://localhost:5000/api/formAuth/renewForm/${userDetails.regId}`, // Replace userId with the appropriate user ID you want to update
        {
          phnNumber: userDetails.phnNumber,
          duration: duration,
          class2: class2,
          regId: userDetails.regId,
        },
        config
      );
      //    setLoading(false)

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location = "/Slip";
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const value = true;
  return (
    <>
      <Navigation />
      <div className="flex h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-picSignUp">
        <div
          className={`bg-white w-[800px] h-[340px] flex flex-col space-y-10 justifiy-center items-center transition-opacity duration-1000 ${
            isPageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-row w-full h-16 text-2xl font-bond justify-center items-center dark:bg-gray-900 text-white">
            Renewal Application Form{" "}
          </div>
          <form
            autoComplete="on"
            className="grid grid-col-3 space-y-10 content-center"
          >
            <div className="mt-2 flex space-x-10">
              <div>
                <label htmlFor="MobileNo" className="text-xl font-bold">
                  Mobile Number:{" "}
                </label>
                <input
                  type="tel"
                  name="MobileNo"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  value={userDetails.phnNumber}
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>
              <div>
                <label htmlFor="Class" className="text-xl font-bold">
                  Class:{" "}
                </label>
                <select
                  name="Class"
                  id="Class"
                  onChange={(e) => setClass2(e.target.value)}
                  defaultValue={"default"}
                  value={class2}
                >
                  <option value={"default"} disabled>
                    Choose
                  </option>
                  <option value="1st Class">1st Class</option>
                  <option value="2nd Class">2nd Class</option>
                </select>
              </div>
            </div>
            <div className="mt-2 flex space-x-10">
              <div>
                <label htmlFor="ticketno" className="text-xl font-bold">
                  Ticket Number:{" "}
                </label>
                <input
                  type="text"
                  name="ticketno"
                  className="mx-2 shadow-lg appearance-none border w-22 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  value={userDetails.ticketNo}
                  minLength={10}
                  maxLength={10}
                  required
                  readOnly
                />
              </div>

              <div>
                <label
                  htmlFor="Selecttheoption"
                  className="ml-2 text-xl font-bold"
                >
                  Duration:{" "}
                </label>
                <select
                  name="Selecttheoption"
                  id="Selecttheoption"
                  onChange={(e) => setDuration(e.target.value)}
                  defaultValue={"default"}
                  value={duration}
                >
                  <option value={"default"} disabled>
                    Choose
                  </option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="datebeg" className="ml-2 text-xl font-bold">
                Period of Pass:{" "}
              </label>
              <span>
                <span className="text-lg mx-2">From</span>
                <input
                  type="text"
                  name="setPeriodFrom"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  value={userDetails.startdate}
                  readOnly
                ></input>
              </span>
              <span>
                <span className="text-lg mx-2">to</span>
                <input
                  type="text"
                  name="setPeriodTo"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  value={userDetails.enddate}
                  readOnly
                />
              </span>
            </div>

            <button
              type="submit"
              className="inline-block m-auto w-32 px-4 py-2.5 font-medium text-lg leading-tight uppercase rounded-full shadow-md dark:bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
              // className="inline-block m-auto w-32 px-6 py-2.5 bg-blue text-pink font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:dark:bg-gray-900 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RenewalApplication;
