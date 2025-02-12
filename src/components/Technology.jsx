import { useState, useEffect } from "react";
import SoundWaves from "../assets/sound-waves.png";
import RadioFrequency from "../assets/frequency.png";
import redio1 from "../assets/redio1.png";
import redio2 from "../assets/redio2.png";
import sound from "../assets/sound.png";
import NavBarToAll from "./NavTOALL";
import Footer from "./Footer";

export default function Technology() {
  // States to control drawer visibility
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  // Toggle Drawer Functions
  const toggleLeftDrawer = () => setIsLeftDrawerOpen(!isLeftDrawerOpen);
  const toggleRightDrawer = () => setIsRightDrawerOpen(!isRightDrawerOpen);

  // Lock/Unlock Body Scroll when drawers are open/closed
  useEffect(() => {
    if (isLeftDrawerOpen || isRightDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up overflow style on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLeftDrawerOpen, isRightDrawerOpen]);

  return (
    <div >
      <div className="bg-gray-100 pb-5">
      <NavBarToAll  />
      </div>
    <div className="min-h-screen p-10 bg-gray-100 flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2 aboutParagraph">Technology</p>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 extraBoldText">Wireless Charging Technology</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 aboutParagraph">
            Full freedom to charge your battery-operated devices, with wireless
            charging solutions without distance constraint.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Radio Frequency Feature */}
          <div className="bg-gradient-to-b from-green-500 to-green-700 flex flex-col items-center text-center p-8 rounded-2xl shadow-lg">
            <div className="bg-green-200 p-6 rounded-full mb-6 shadow-md">
              <img src={RadioFrequency} alt="Radio Frequency Icon" className="h-10 w-10" />
            </div>
            <button
              onClick={toggleLeftDrawer}
              className="litleboldText text-lg font-semibold text-white mb-3"
            >
              Radio Frequency
            </button>
            <p className="text-white text-sm leading-relaxed aboutParagraph">
              Wireless charging technology can use different radio frequencies (RF)
              depending on the application and the distance over which power needs to
              be transferred.
            </p>
            <button
              onClick={toggleLeftDrawer}
              className="litleboldText text-sm font-semibold text-white mt-3"
            >
              Learn More
            </button>
          </div>

          {/* Sound Energy Feature */}
          <div className="bg-gradient-to-b from-green-500 to-green-700 flex flex-col items-center text-center p-8 rounded-2xl shadow-lg">
            <div className="bg-green-200 p-6 rounded-full mb-6 shadow-md">
              <img src={SoundWaves} alt="Sound Energy Icon" className="h-10 w-10" />
            </div>
            <button
              onClick={toggleRightDrawer}
              className="litleboldText text-lg font-semibold text-white mb-3"
            >
              Sound Energy
            </button>
            <p className="text-white text-sm leading-relaxed aboutParagraph">
              Sound energy is a form of kinetic energy that is produced by the
              vibration of objects. These vibrations cause air particles or molecules
              to collide with neighbouring particles, creating sound waves that travel
              through mediums like air, water, wood, glass, or metal.
            </p>
            <button
              onClick={toggleRightDrawer}
              className="litleboldText text-sm font-semibold text-white mt-3"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Left Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 md:w-6/12 bg-white shadow-lg transition-transform duration-500 ease-in-out ${
          isLeftDrawerOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="absolute p-6  md:pt-0 pt-72  flex flex-col justify-center items-center h-full space-y-4 z-50 overflow-y-auto md:overflow-y-none">
          <h2 className="litleboldText font-bold text-xl text-gray-800">Radio Frequency</h2>
          <p className="text-gray-600 aboutParagraph">
            Wireless charging technology can use different radio frequencies (RF) depending
            on the application and the distance over which power needs to be transferred.
          </p>
          <ul className="text-gray-600 aboutParagraph list-disc pl-5">
            <li>
              <span className="font-bold">Inductive Charging:</span> Uses electromagnetic fields to transfer energy over short distances (a few millimetres). Commonly used in smartphones and wearables.
            </li>
            <li>
              <span className="font-bold">Resonant Charging:</span> Allows charging over slightly longer distances (a few centimetres) using resonant inductive coupling. Useful when devices are not perfectly aligned with the charging pad.
            </li>
            <li>
              <span className="font-bold">Radio Frequency (RF) Charging:</span> Enables power transfer over much greater distances, up to several feet. Ideal for low-power devices like sensors and IoT gadgets.
            </li>
          </ul>
          <div className="flex justify-center flex-wrap items-center  gap-2 w-44">
            <img className=" rounded-lg" src={redio1}/>
            <img className="object-cover rounded-lg" src={redio2}/>
          </div>
          <button
            className="AboutTitle mt-4 font-bold text-white bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600"
            onClick={toggleLeftDrawer}
          >
            Close
          </button>
        </div>
      </div>

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 md:w-6/12 bg-white transition-transform duration-500 ease-in-out ${
          isRightDrawerOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="absolute md:pt-0 pt-[440px] p-6 flex flex-col justify-center items-center h-full space-y-4 z-50 md:overflow-y-none overflow-y-auto md:overflow-y-none">
          <h2 className="litleboldText font-bold text-xl text-gray-800">Sound Energy</h2>
          <p className="text-gray-600 aboutParagraph">
            Sound energy is a form of kinetic energy that is produced by the vibration of objects. These vibrations cause air particles or molecules to collide with neighbouring particles, creating sound waves that travel through mediums like air, water, wood, glass, or metal.
          </p>
          <ul className="text-gray-600 aboutParagraph list-disc pl-5">
            <li>
              <span className="font-bold">Generation:</span> Sound energy is generated when an object vibrates. Examples include a car honking, a dog barking, or wind howling.
            </li>
            <li>
              <span className="font-bold">Transmission:</span> Sound waves travel in a straight line and require a medium to propagate. They cannot travel through a vacuum because there are no particles to transmit the wave.
            </li>
            <li>
              <span className="font-bold">Measurement:</span> The intensity of sound is measured in decibels (dB), and the frequency is measured in Hertz (Hz). Humans can hear sounds in the frequency range of 20 Hz to 20,000 Hz.
            </li>
            <li>
              <span className="font-bold">Applications:</span> Sound energy is primarily used for hearing, but it also has applications in devices like microphones and loudspeakers, which convert sound energy to electrical energy and vice versa.
            </li>
          </ul>
          <div className="w-52 ">
            <img className="rounded-lg" src={sound}/>
          </div>
          <button
            className="AboutTitle mt-4 font-bold text-white bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600"
            onClick={toggleRightDrawer}
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
