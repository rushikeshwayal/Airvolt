// import React from "react";
// import DropDown from "./DropDown";
// import LogOutBtn from "./LogOutBtn";
// import UserPng from '../../assets/User.png'

import AboutDropDown from "./AboutDropDown";
import TechDropDown from "./TechDropDown";


function NavBar() {
    return (
        <div className="flex flex-wrap h-20 items-center z-20 text-white px-1 sm:px-20 ">
            {/* Logo Section */}
            <div className="mr-auto sm:w-auto w-full text-center text-green-400">
                <a href="/" className="boldText font-bold text-sm sm:text-2xl whitespace-nowrap">
                    Airvolt
                </a>
            </div>
            {/* Navigation Links */}
            <div className="flex justify-around items-center text-center space-x-2 sm:space-x-6 md:space-x-8 text-xs sm:text-sm md:text-base">
                <a
                    href="/"
                    className=" AboutTitle hover:bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:text-black transition duration-300 ease-in-out"
                >
                    Home
                </a>
                <AboutDropDown/>
                <a
                    href="#features"
                    className=" AboutTitle hover:bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:text-black transition duration-300 ease-in-out"
                >
                    Industry Focus 
                </a>
                <TechDropDown/>
                <a
                    href="/contact-us"
                    className=" AboutTitle hover:bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:text-black transition duration-300 ease-in-out"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}

export default NavBar;

{/* <img src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/grow-plant-store-logo-white.svg" alt="Grow"/> */}