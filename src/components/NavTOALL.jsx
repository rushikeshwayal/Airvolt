// import React from "react";
// import DropDown from "./DropDown";
// import LogOutBtn from "./LogOutBtn";
// import UserPng from '../../assets/User.png'

import AboutDropDownALL from "./AboutDropDownALL";
import TechDropDownALL from "./TechDropDownALL";


function NavBarToAll() {
    return (
        <div className="flex flex-wrap h-20 items-center z-20  px-1 sm:px-20 ">
            {/* Logo Section */}
            <div className="mr-auto sm:w-auto w-full text-center text-white mt-2  flex justify-center items-center">
                <a href="/" className="boldText font-bold text-xs sm:text-lg whitespace-nowrap bg-black rounded-full flex items-center justify-center sm:w-[80px] sm:h-[80px] w-14 h-14">
                    Airvolt
                </a>
            </div>
            {/* Navigation Links */}
            <div className="flex justify-around items-center text-center space-x-2 sm:space-x-6 md:space-x-8 text-[10px] sm:text-sm md:text-base">
                <a
                    href="/"
                    className=" AboutTitle hover:bg-black px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:text-white transition duration-300 ease-in-out"
                >
                    Home
                </a>
                <AboutDropDownALL/>
                <a
                    href="/industry-focus"
                    className=" AboutTitle hover:bg-black px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:text-white transition duration-300 ease-in-out"
                >
                    Industry Focus 
                </a>
                <TechDropDownALL/>
                <a
                    href="/contact-us"
                    className=" AboutTitle hover:bg-black px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:text-white transition duration-300 ease-in-out"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}

export default NavBarToAll;

{/* <img src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/grow-plant-store-logo-white.svg" alt="Grow"/> */}