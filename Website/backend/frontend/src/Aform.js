import React, { useState } from "react";
import './Aform.css';

function Application() {
    const value = true;
    return (
        <>
            <div className="flex">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0gy42OMlPttBKCMqeDCNM_qJ-uNUhxwsig&usqp=CAU"
                    className="w-[650px] h-full" alt=""></img>
                <div className="">
                    <div className="flex flex-row w-full h-16 text-2xl font-bond justify-center items-center bg-black text-white">Application Form </div>
                    <form autoComplete="on" className="grid grid-col-3 space-y-10 content-center">
                        <div className="mt-2 flex space-x-5">
                            <div>
                                <label htmlFor="firstname" className="ml-2 text-lg font-bold">First Name: </label>
                                <input type="text" name="firstname" className="mx-2 shadow-lg appearance border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="middlename" className="text-lg font-bold">Middle Name: </label>
                                <input type="text" name="middlename" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="surname" className="text-lg font-bold">Surname: </label>
                                <span><input type="text" name="surname" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input></span>
                            </div>
                        </div>
                        <div className="my-1 flex space-x-5">
                            <div>
                                <label htmlFor="dob" className="ml-2 text-xl font-bold">D.O.B: </label>
                                <input type="date" name="dob" className="mx-2 shadow-lg appearance border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="age" className="text-xl font-bold">Age: </label>
                                <input type="number" maxlength="2" name="age" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="gender" className="text-xl font-bold ml-16">Gender: </label>
                                <select name="gender" id="cars">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="my-1 flex space-x-10">
                            <div>
                                <label htmlFor="course" className="ml-2 text-xl font-bold">Courses: </label>
                                <select name="course" id="course">
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="MCA">MCA</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="FDC">FDC</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="year" className="text-xl font-bold">Year: </label>
                                <select name="year" id="year">
                                    <option value="FY">FY</option>
                                    <option value="SY">SY</option>
                                    <option value="TY">TY</option>
                                    <option value="Final YR">Final YR</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Selecttheoption" className="ml-2 text-xl font-bold">Select the option: </label>
                                <select name="Selecttheoption" id="Selecttheoption">
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Class" className="text-xl font-bold">Class: </label>
                                <select name="Class" id="Class">
                                    <option value="1st Class">1st Class</option>
                                    <option value="2nd Class">2nd Class</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-2 flex space-x-10">
                            <div>
                                <label htmlFor="stationfrom" className="text-xl font-bold">Station From: </label>
                                <input type="text" name="stationfrom" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                                <span>
                                    <span className="text-lg mx-2">to</span>
                                    <select name="Stationto" id="Stationto">
                                        <option value="Dadar">Dadar</option>
                                        <option value="Matunga">Matunga</option>
                                        <option value="King Circle">King Circle</option>
                                        <option value="Vadala">Vadala</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="flex bg-black h-16 pt-4 justify-center align-center">
                            <p className=" text-white font-bold text-2xl">&#8594; Details of Previous Pass &#8592;</p>
                        </div>
                        <div className="mt-2 flex space-x-10">
                            <div>
                                <label htmlFor="ticketno" className="text-xl font-bold">Ticket Number: </label>
                                <input type="number" name="ticketno" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="Class" className="text-xl font-bold">Class: </label>
                                <select name="Class" id="Class">
                                    <option value="1st Class">1st Class</option>
                                    <option value="2nd Class">2nd Class</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="datebeg" className="ml-2 text-xl font-bold">Period of Pass: </label>
                            <input type="date" name="ticketno" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            <span>
                                <span className="text-lg mx-2">to</span>
                                <input type="date" name="ticketno" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </span>
                        </div>
                        <div className="mt-2 flex space-x-10">
                            <div>
                                <label htmlFor="Category" className="ml-2 text-xl font-bold">Cateogry: </label>
                                <select name="Category" id="Category">
                                    <option value="General">General</option>
                                    <option value="S.C.">S.C.</option>
                                    <option value="S.T.">S.T.</option>
                                </select>
                                <label htmlFor="Category" className="ml-8 text-lg font-bold">Upload Caste Validity Certificate(If S.C/S.T then upload): </label>
                                <input type="file" name="Category" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>                            </div>

                        </div>
                        <div className="mt-2 flex space-x-10">
                            <div>
                                <label htmlFor="Address" className="ml-2 text-xl font-bold">Address: </label>
                                <input type="text" name="Address" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>

                            </div>
                            <div>
                                <label htmlFor="MobileNo" className="text-xl font-bold">Mobile Number: </label>
                                <input type="tel" name="MobileNo" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                        </div>
                        <div className="mt-2 flex space-x-10">
                            <div>
                                <label htmlFor="AadharCard" className="ml-2 text-xl font-bold">Aadhar Card of Student: </label>
                                <input type="file" name="AadharCard" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                        </div>
                        <div className="mt-2 flex space-x-10">
                            <div>
                                <label htmlFor="Sign" className="ml-2 text-xl font-bold">Upload Signature of Student: </label>
                                <input type="file" name="Sign" className="mx-2 shadow-lg appearance-none border w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                        </div>
                        <button type="submit" className="inline-block m-auto w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Application;