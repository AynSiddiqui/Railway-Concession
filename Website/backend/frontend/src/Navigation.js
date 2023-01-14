import React from "react";
import { Link } from "react-router-dom";
import NavigationImage from './NavigationImage.png';
import Pdf from './Documentation.pdf'
import "./Navigation.css";

function Navigation ()
{
    return (
        <>
            <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 ">
                <nav className="flex flex-row h-16 ">
                    <img src={NavigationImage} className="h-16 pl-4 pt-3 animate-bounce" alt=""></img>
                    <div className="flex list-none my-auto ml-[800px] space-x-16">
                    <a href = {Pdf} target = "blank" className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg' download>Documentation</a>
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