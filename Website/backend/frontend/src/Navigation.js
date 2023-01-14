import React from "react";
import { Link } from "react-router-dom";
import NavigationImage from './NavigationImage.png';
import "./Navigation.css";

const Navigation = () => {
  
    const onButtonClick = () => {
        fetch('Documentation.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Documentation.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 ">
                <nav className="flex flex-row h-16 ">
                    <img src={NavigationImage} className="h-16 pl-4 pt-3 animate-bounce" alt=""></img>
                    <div className="flex list-none my-auto ml-[800px] space-x-16">
                    <button className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg' onClick={onButtonClick} >Documentation</button>
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