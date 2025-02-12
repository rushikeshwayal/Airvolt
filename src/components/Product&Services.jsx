import React from "react";
import BackCover from "../assets/BackCover.jpg";
import Sound from "../assets/sound.jpg";
import Andriod from "../assets/andriod.jpg";
import NavBarToAll from "./NavTOALL";
import Footer from "./Footer";

export default function ProjectAndServices() {
  return (
    <div>
      <div className=" pb-5">
      <NavBarToAll />
      </div>
    <div id="Product" className="p-10 flex flex-col items-center ">
      <div className="mb-10">
        <h1 className="extraBoldText text-3xl text-center text-green-500">Products</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl p-5 transform hover:scale-105 transition duration-300 -z-10">
          <img
            className="h-80 w-64 object-cover rounded-xl mb-4"
            src={Andriod}
            alt="Android & IOS Application"
          />
          <h1 className="litleboldText text-center mb-2">
            Android & iOS Smartphone Application
          </h1>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl p-5 transform hover:scale-105 transition duration-300 -z-10">
          <img
            className="h-80 w-64 object-cover rounded-xl mb-4"
            src={Sound}
            alt="Sound Energy Collector Kit"
          />
          <h1 className="litleboldText text-center mb-2">
            Sound Energy Collector Kit
          </h1>
          <p className="aboutParagraph text-center">SECK</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl p-5 transform hover:scale-105 transition duration-300 -z-10">
          <img
            className="h-80 w-64 object-cover rounded-xl mb-4"
            src={BackCover}
            alt="Embedded Smartphone Back Cover"
          />
          <h1 className="litleboldText text-center mb-2">
            Embedded Smartphone Back Cover
          </h1>
          <p className="aboutParagraph text-center">ESBC</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
