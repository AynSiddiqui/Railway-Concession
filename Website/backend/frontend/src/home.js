import React from "react";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";
import "./home.css";

function Home() {
    return (
        <div>
            <Navigation />
            <section className="dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">VJTI Railway Concession</h2>
                        <p className="mb-4">"It's not the beginning or the destination that counts. It's the ride in between...This train is alive with things that should be seen and heard. It's a living, breathing something -- you just have to want to learn its rhythm.”</p>
                        <p className="mb-4">30% Concession is given by College.</p>

                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://media.istockphoto.com/id/1281921560/photo/mumbai-suburban-railway.jpg?s=612x612&w=0&k=20&c=rpWL9mcwGckSizgK1AQyy2vMNrP5hXqrfG9SWAIBU9s=" alt="office content 2"></img>
                        <img className="w-full rounded-lg" src="https://i.pinimg.com/736x/44/ee/a4/44eea41915090fbce45a7ee1cb5a88b3.jpg" alt="office content 1"></img>
                    </div>
                </div>
            </section>
            <div className="bg-gray-200 flex flex-col justify-center items-center space-y-10">
                <p className="bg-black text-white text-4xl font-bond mt-5 p-4">Mumbai Railway System</p>
                <img src="https://erail.in/images/net-map/mumbai-local-trains.jpg" className="rounded-2xl my-8 h-[900px] w-[850px] pb-3" alt=""></img>
            </div>
            <Footer />
        </div >
    );
}

export default Home;