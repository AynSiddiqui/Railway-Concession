import React from "react";
import { Link } from "react-router-dom";
import Login from './Login.js';
import SignUp from './SignUp.js';
import Application from './Aform.js';
import "./Navigation.css";

function Navigation() {
    return (
        <>
            <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 ">
                <nav className="flex flex-row h-16 ">
                    <img src="https://o.remove.bg/downloads/7dc3fdfa-f3dc-420d-bb38-62d7f0a21051/image-removebg-preview.png" className="h-16 pl-4 pt-3 animate-bounce" alt=""></img>
                    <div className="flex list-none my-auto ml-[800px] space-x-32">
                        <Link to='/ApplicationForm' className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg hover:cursor-pointer'>Application Form</Link>
                        <Link to='/SignUp' className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg'>Sign Up</Link>
                        <Link to='/Login' className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg'>Sign In</Link>
                    </div>
                </nav >
            </div >
        </>
    );
}


export default Navigation;