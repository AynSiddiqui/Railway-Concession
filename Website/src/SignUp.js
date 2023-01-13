import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
    return (
        <div>
            <div className="h-screen bgimage flex justify-center items-center ">
                <div className="bg-white w-[1100px] h-[520px] rounded-3xl flex flex-col space-y-10 justifiy-center items-center">
                    <h1 className="text-4xl text-black font-bold mt-8">Sign Up</h1>
                    <form className="flex flex-col space-y-10 justify-center items-center">
                        <div className="my-1 flex space-x-10">
                            <div>
                                <label htmlFor="email" className="text-xl text-purple-violent font-bold">Email ID: </label>
                                <input type="email" pattern=".+@[A-Za-z0-9.-]+\.vjti.ac.in" name="title" className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="registrationid" className="text-xl text-purple-violent font-bold">Registration ID: </label>
                                <input type="number" maxLength={9} name="registrationid" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                        </div>
                        <div className="my-1 flex space-x-10">
                            <div>
                                <label htmlFor="name" className="text-xl text-purple-violent font-bold">Full Name: </label>
                                <input type="text" name="name" className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="phonenumber" className="text-xl text-purple-violent font-bold">Phone Number: </label>
                                <input type="tel" name="phonenumber" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                        </div>
                        <div className="my-1 flex space-x-10">
                            <div>
                                <label htmlFor="password" className="text-xl text-purple-violent font-bold">Password: </label>
                                <input type="password" name="password" className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="confirmpassword" className="text-xl text-purple-violent font-bold">Confirm Password: </label>
                                <input type="password" name="confirmpassword" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                        </div>
                        <button type="submit" className="inline-block w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                    </form>
                    <div className="my-1 text-white">
                        <p className="text-xl text-black">Already have account?</p>
                        <Link to='/Login' className="text-2xl text-black text-center underline cursor-pointer hover:text-red-600">Log In</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SignUp;