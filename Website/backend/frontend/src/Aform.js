import React, { useState, useEffect } from "react";
import "./Aform.css";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";
import axios from "axios";
import ErrorMessage from "./ErrorMesssge";
import { supabase } from "./lib/supabase";
import { v4 as uuidv4 } from "uuid";

function Application() {
  var filedata = "";
  const [firstname, setFirstName] = useState("");
  const [middlename, setmiddleName] = useState("");
  const [surname, setsurName] = useState("");
  const [dob, setdobName] = useState();
  const [age, setAgeName] = useState("");
  const [gender, setgender] = useState();
  const [course, setCourse] = useState();
  const [year, setYear] = useState();
  const [duration, setDuration] = useState();
  const [class1, setClass1] = useState();
  const [stationfrom, setStationFrom] = useState("");
  const [stationto, setStationto] = useState();
  // const [ticketNo, setticketNo] = useState("");
  // const [class2, setClass2] = useState();
  // const [periodfrom, setPeriodFrom] = useState();
  // const [periodTo, setPeriodTo] = useState();
  const [category, setCategory] = useState();
  const [address, setAddress] = useState("");
  const [phnNumber, setphnNumber] = useState("");
  const [selectedImage, setSelectImage] = useState(null);
  const [error, setError] = useState(false);
  // const[loading,setLoading] = useState(false)
  const [message, setMessage] = useState("");
  const [aadhar, setaadhar] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location = "/Login";
    }
  }, []);
  //     const handleSubmit = async (e) =>{
  //         try {
  //         e.preventDefault();
  //         const filename = `${uuidv4()}-${e.name}`;

  // const { data, error } = await supabase.storage
  // .from("aadhar-card-images")
  // .upload(filename,aadhar, {
  // cacheControl: "3600",
  // upsert: false,
  // });

  // const filepath = data.path;
  //         }
  //      catch(error)
  //             {
  //                 setError(error.response.data.message)

  //             }
  //     }
  //     const handleFileSelected = (e) => {
  //         setaadhar(e.target.aadhar[0]);
  //     }

  const levenshteinDistance = (word1, word2) => {
    const m = word1.length;
    const n = word2.length;
    const dp = [...Array(m + 1)].map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j - 1] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j] + 1
          );
        }
      }
    }

    return dp[m][n];
  };
  const handleIDInputChange = async (files) => {
    const file = files[0];
    console.log(file);
    const filename = `${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("aadhar-card-images")
      .upload(filename, file);
    const T = require("tesseract.js");

    T.recognize(file, "eng").then((out) => {
      filedata = out.data.text.slice(14, out.data.text.indexOf("Hostelize"));
      console.log(filedata);

      // Check if station is present in the filedata string
      // const station = "candoa"; //66.67% similar to bandra so will give true for minimum accuracy <= 66.67%
      // const station = "rajai oadr"; //trying with space

      const station = "candoa"; //this will be what user enters
      const percentage = 0.5; // Minimum accuracy needed out of 1 //not required as considering no. of char

      const words = station.split(/\s+/);

      const isPresent = words.reduce((result, word) => {
        return result && checkPresence(filedata, word, percentage);
      }, true);

      //true if max 2 char differs and length, order is same
      console.log(`Is ${station} present:`, isPresent);
    });
    if (error) {
      console.error(error);
    } else {
      console.log(data.Key);
      // Save the file path to your database or perform other actions
    }
  };

  const checkPresence = (filedata, station, percentage) => {
    const words = filedata
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => word !== "");
    // const threshold = 1 - percentage; // Set the accuracy threshold
    const threshold = 2.0 / station.length; //only 2 chars can be wrong
    console.log(station, threshold, words);
    station = station.toLowerCase();
    const similarityThreshold = Math.floor(station.length * threshold);
    const isPresent = words.some((word) => {
      const distance = levenshteinDistance(station, word);
      return distance <= similarityThreshold;
    });
    return isPresent;
  };

  const handleSignatureInputChange = async (files) => {
    const file = files[0];
    const filename = `${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("signature")
      .upload(filename, file);

    if (error) {
      console.error(error);
    } else {
      console.log(data.Key);
      // Save the file path to your database or perform other actions
    }
  };
  const handleCasteInputChange = async (files) => {
    const file = files[0];
    const filename = `${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("caste-validity")
      .upload(filename, file);

    if (error) {
      console.error(error);
    } else {
      console.log(data.Key);
      // Save the file path to your database or perform other actions
    }
  };

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
        "http://localhost:5000/api/formAuth/fillForm",
        {
          firstname: firstname,
          middlename: middlename,
          surname: surname,
          dob: dob,
          age: age,
          gender: gender,
          course: course,
          year: year,
          duration: duration,
          class1: class1,
          stationfrom: stationfrom,
          stationto: stationto,
          // ticketNo: ticketNo,
          // class2: class2,
          // periodfrom: periodfrom,
          // periodTo: periodTo,
          category: category,
          address: address,
          phnNumber: phnNumber,
        },
        config
      );
      //    setLoading(false)

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location = "/GenerateSlip";
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const value = true;
  return (
    <>
      <Navigation />
      <div className="flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0gy42OMlPttBKCMqeDCNM_qJ-uNUhxwsig&usqp=CAU"
          className="w-[650px] h-full"
          alt=""
        ></img>
        <div className="">
          <div className="flex flex-row w-full h-16 text-2xl font-bond justify-center items-center bg-black text-white">
            Application Form{" "}
          </div>
          <form
            autoComplete="on"
            className="grid grid-col-3 space-y-10 content-center"
          >
            <div className="mt-2 flex space-x-5">
              <div>
                <label htmlFor="firstname" className="ml-2 text-lg font-bold">
                  First Name:{" "}
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="mx-2 shadow-lg appearance border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstname}
                  minLength={3}
                  required
                />
              </div>
              <div>
                <label htmlFor="middlename" className="text-lg font-bold">
                  Middle Name:{" "}
                </label>
                <input
                  type="text"
                  name="middlename"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setmiddleName(e.target.value)}
                  value={middlename}
                  minLength={3}
                  required
                />
              </div>
              <div>
                <label htmlFor="surname" className="text-lg font-bold">
                  Surname:{" "}
                </label>
                <span>
                  <input
                    type="text"
                    name="surname"
                    className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                    onChange={(e) => setsurName(e.target.value)}
                    value={surname}
                    minLength={3}
                    required
                  />
                </span>
              </div>
            </div>
            <div className="my-1 flex space-x-5">
              <div>
                <label htmlFor="dob" className="ml-2 text-xl font-bold">
                  D.O.B:{" "}
                </label>
                <input
                  type="date"
                  name="dob"
                  className="mx-2 shadow-lg appearance border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setdobName(e.target.value)}
                  value={dob}
                  required
                />
              </div>
              <div>
                <label htmlFor="age" className="text-xl font-bold">
                  Age:{" "}
                </label>
                <input
                  type="number"
                  maxlength="2"
                  name="age"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setAgeName(e.target.value)}
                  value={age}
                  minLength={1}
                  maxLength={2}
                  required
                />
              </div>
              <div>
                <label htmlFor="gender" className="text-xl font-bold ml-16">
                  Gender:{" "}
                </label>
                <select
                  name="gender"
                  id="cars"
                  onChange={(e) => setgender(e.target.value)}
                  defaultValue={"default"}
                  value={gender}
                >
                  <option value={"default"} disabled>
                    Choose
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="my-1 flex space-x-10">
              <div>
                <label htmlFor="course" className="ml-2 text-xl font-bold">
                  Courses:{" "}
                </label>
                <select
                  name="course"
                  id="course"
                  onChange={(e) => setCourse(e.target.value)}
                  defaultValue={"default"}
                  value={course}
                >
                  <option value={"default"} disabled>
                    Choose
                  </option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="Diploma">Diploma</option>
                  <option value="FDC">FDC</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="text-xl font-bold">
                  Year:{" "}
                </label>
                <select
                  name="year"
                  id="year"
                  onChange={(e) => setYear(e.target.value)}
                  defaultValue={"default"}
                  value={year}
                >
                  <option value={"default"} disabled>
                    Choose
                  </option>
                  <option value="FY">FY</option>
                  <option value="SY">SY</option>
                  <option value="TY">TY</option>
                  <option value="Final YR">Final YR</option>
                </select>
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
              <div>
                <label htmlFor="Class" className="text-xl font-bold">
                  Class:{" "}
                </label>
                <select
                  name="Class"
                  id="Class"
                  onChange={(e) => setClass1(e.target.value)}
                  defaultValue={"default"}
                  value={class1}
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
                <label htmlFor="stationfrom" className="text-xl font-bold">
                  Station From:{" "}
                </label>
                <input
                  type="text"
                  name="stationfrom"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setStationFrom(e.target.value)}
                  value={stationfrom}
                ></input>
                <span>
                  <span className="text-lg mx-2">to</span>
                  <select
                    name="Stationto"
                    id="Stationto"
                    onChange={(e) => setStationto(e.target.value)}
                    defaultValue={"default"}
                    value={stationto}
                  >
                    <option value={"default"} disabled>
                      Choose
                    </option>
                    <option value="Dadar">Dadar</option>
                    <option value="Matunga">Matunga</option>
                    <option value="King Circle">King Circle</option>
                    <option value="Vadala">Vadala</option>
                  </select>
                </span>
              </div>
            </div>
            {/* /////////////////// */}
            <div className="mt-2 flex space-x-10">
              <div>
                <label htmlFor="Category" className="ml-2 text-xl font-bold">
                  Category:{" "}
                </label>
                <select
                  name="Category"
                  id="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="General">General</option>
                  <option value="S.C.">S.C.</option>
                  <option value="S.T.">S.T.</option>
                </select>
                <label htmlFor="Category" className="ml-8 text-lg font-bold">
                  Upload Caste Validity Certificate(If S.C/S.T then upload):{" "}
                </label>
                <input
                  type="file"
                  name="Category"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => handleCasteInputChange(e.target.files)}
                ></input>{" "}
              </div>
            </div>
            <div className="mt-2 flex space-x-10">
              <div>
                <label htmlFor="Address" className="ml-2 text-xl font-bold">
                  Address:{" "}
                </label>
                <input
                  type="text"
                  name="Address"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                ></input>
              </div>
              <div>
                <label htmlFor="MobileNo" className="text-xl font-bold">
                  Mobile Number:{" "}
                </label>
                <input
                  type="tel"
                  name="MobileNo"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setphnNumber(e.target.value)}
                  value={phnNumber}
                ></input>
              </div>
            </div>
            <div className="mt-2 flex space-x-10">
              <div>
                <label htmlFor="AadharCard" className="ml-2 text-xl font-bold">
                  ID Card of Student(having address):{" "}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="AadharCard"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => handleIDInputChange(e.target.files)}
                ></input>
              </div>
            </div>
            <div className="mt-2 flex space-x-10">
              <div>
                <label htmlFor="Sign" className="ml-2 text-xl font-bold">
                  Upload Signature of Student:{" "}
                </label>
                <input
                  type="file"
                  name="Sign"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => handleSignatureInputChange(e.target.files)}
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="inline-block m-auto w-32 px-6 py-2.5 bg-blue text-pink font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
              onClick={submitHandler}
            >
              Submit
            </button>

            {/* ////////////////////////// */}
            {/* <div className="flex bg-black h-16 pt-4 justify-center align-center">
              <p className=" text-white font-bold text-2xl">
                &#8594; Details of Previous Pass &#8592;
              </p>
            </div> */}
            {/* <div className="mt-2 flex space-x-10">
              <div>
                <label htmlFor="ticketno" className="text-xl font-bold">
                  Ticket Number:{" "}
                </label>
                <input
                  type="number"
                  name="ticketno"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setticketNo(e.target.value)}
                  value={ticketNo}
                  required
                />
              </div>
              <div> */}
            {/* <label htmlFor="Class" className="text-xl font-bold">
                  Class:{" "}
                </label> */}
            {/* <select
                  name="Class"
                  id="Class"
                  onChange={(e) => setClass2(e.target.value)}
                  value={class2}
                >
                  <option value="1st Class">1st Class</option>
                  <option value="2nd Class">2nd Class</option>
                </select> */}
            {/* </div>
            </div> */}
            {/* <div>
              <label htmlFor="datebeg" className="ml-2 text-xl font-bold">
                Period of Pass:{" "}
              </label>
              <input
                type="date"
                name="ticketno"
                className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                onChange={(e) => setPeriodFrom(e.target.value)}
                value={periodfrom}
              ></input>
              <span>
                <span className="text-lg mx-2">to</span>
                <input
                  type="date"
                  name="ticketno"
                  className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"
                  onChange={(e) => setPeriodTo(e.target.value)}
                  value={periodTo}
                ></input>
              </span>
            </div> */}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Application;
