import { useState, useEffect } from "react";

import OurStory from "../assets/OurStory.jpg";
import AboutImg from "../assets/download.jpeg";
import Vision from "../assets/Vision.jpg";
import Mission from "../assets/Mission.jpg";
import NavBarToAll from "./NavTOALL";
import Footer from "./Footer";

export default function AboutUs() {
  // States to control each drawer visibility
  const [isOurStoryDrawerOpen, setIsOurStoryDrawerOpen] = useState(false);
  const [isVisionDrawerOpen, setIsVisionDrawerOpen] = useState(false);
  const [isMissionDrawerOpen, setIsMissionDrawerOpen] = useState(false);

  // Functions to toggle each drawer
  const toggleOurStoryDrawer = () => setIsOurStoryDrawerOpen(!isOurStoryDrawerOpen);
  const toggleVisionDrawer = () => setIsVisionDrawerOpen(!isVisionDrawerOpen);
  const toggleMissionDrawer = () => setIsMissionDrawerOpen(!isMissionDrawerOpen);

  // Effect to prevent body scrolling when any drawer is open
  useEffect(() => {
    if (isOurStoryDrawerOpen || isVisionDrawerOpen || isMissionDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOurStoryDrawerOpen, isVisionDrawerOpen, isMissionDrawerOpen]);

  return (
    <div className="bg-gray-50">
      <div className="pb-10 bg-gray-50">
      <NavBarToAll className = "font-AboutTitle text-black  " />
      </div>
    <div id="About" className="px-5 py-3 bg-gray-50  border-gray-500">
      
      <div className="flex flex-col justify-center items-center space-y-8">
        {/* Title Section */}
        <div className="flex flex-col justify-center items-center space-y-4 max-w-6xl mx-auto">
          <h1 className="extraBoldText font-extrabold text-2xl sm:text-4xl text-center text-green-500">About Us</h1>
          <p className="aboutParagraph sm:text-lg text-center text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
          At Airvolt (OPC) Private Limited, we are pioneering the future of wireless charging technology. From our humble beginnings in the agriculture sector as Vegeebook Solutions to our current focus on transforming the way the world powers devices, our journey has been one of innovation and growth. With our breakthrough solutions in wireless charging, we are striving to make the charging process more efficient, reliable, and accessible for everyone, everywhere.
          </p>
        </div>

        {/* About Image Section */}
        <div className="w-full max-w-8xl mx-auto">
          <img className="rounded-xl shadow-lg" src={AboutImg} alt="IMG" />
        </div>

        <div className="space-y-16">
          {/* Our Story Section */}
          <div className="w-full flex flex-col md:flex-row justify-between max-w-7xl mx-auto space-x-8">
            <div className="flex justify-center items-center md:w-1/2">
              <img src={OurStory} alt="About Us" className="rounded-xl w-[400px] h-[260px] object-cover shadow-md"/>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/2">
              <p className="aboutParagraph text-gray-500">Our Story</p>
              <h1 className="font-bold sm:text-2xl text-xl text-green-500 ">Revolutionizing the Future of Charging Technology</h1>
              <p className="aboutParagraph text-gray-500 text-sm sm:text-lg">
              Founded in January 2023 as Vegeebook Solutions (OPC) Private Limited, the company initially focused on providing fresh, ready-to-cook vegetables for the B2B food industry. The company has since pivoted to Airvolt (OPC) Private Limited, working on transforming wireless charging technology. Airvolt aims to address the limitations of traditional charging methods by using Sound Energy and RF Technology to wirelessly charge battery-operated devices without distance constraints. With the increasing adoption of smart devices and the need for efficient charging solutions, Airvolt is dedicated to leading the next era of wireless charging, positioning itself with unique offerings to disrupt industries such as consumer electronics, automotive, and logistics.
              </p>
              <button onClick={toggleOurStoryDrawer} className="font-bold mr-auto">Read More</button>
            </div>
          </div>

          {/* Our Story Drawer */}
          <div
            className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${
              isOurStoryDrawerOpen ? "transform translate-y-0" : "transform translate-y-full"
            }`}
          >
            <div className=" md:border-t-0 border-t-2 max-h-96 pt-[470px] md:pt-6 p-6 flex justify-center flex-col items-center space-y-4 md:overflow-y-none overflow-y-auto">
              <h2 className="font-bold text-xl text-gray-800 AboutTitle">Our Story</h2>
              <p className="text-gray-600 aboutParagraph">
              Company Incorporated back in January 2023, named as Vegeebook Solutions 
(OPC) Private Limited was in Agriculture Sector to serve clean, cut, 
fresh, ready to cook vegetables in B2B food serving business segment.  
Later has been pivoted to the “Airvolt (OPC) Private Limited” (name 
conversion is in work in progress). 
People across has changed the minds to charge battery operated devices 
due to high continuous usage and issues with charging cables lower 
quality causes frequent replacement, plugs unavailability while 
travelling, AC adapters require high cost, unavailability of 
electricity/power cutoff due to any causes, charging plug place 
dependent, if anything is missing then can’t able to charge the device! 
Rising adoption of smart and portable devices, increasing demand for 
wireless charging in electric vehicles, rising requirement for multi
device charging stations, increasing trend of integrating charging 
capabilities into furniture, infrastructures, smart homes, and IoT 
devices. 
Airvolt, inspired on the vision to make world’s people to enable 
everyone to make ready towards next chapter of wireless technology era 
to charge any battery-operated devices through air without any distance 
constraint which is currently having big problem with latest wireless 
charging technology in the market for consumer electronics devices, 
drone industry, logistic industry, automotive industry and others. we 
have positioned our company research & offerings on different USP’s 
than the competitors. We use Sound Energy and RF Technology to carry 
out the wireless charging. 
              </p>
              <button
                className="AboutTitle mt-4 font-bold text-white bg-gray-900 px-6 py-2 rounded-lg hover:bg-gray-950"
                onClick={toggleOurStoryDrawer}
              >
                Close
              </button>
            </div>
          </div>

          {/* Vision Section */}
          <div className="w-full flex flex-col md:flex-row-reverse justify-between max-w-7xl mx-auto space-x-8">
            <div className="flex justify-center items-center md:w-1/2">
              <img src={Vision} alt="About Us" className="rounded-xl w-[400px] h-[260px] object-cover shadow-md"/>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/2">
              <p className="aboutParagraph text-gray-500">Vision</p>
              <h1 className="font-bold sm:text-2xl text-xl text-green-500">Shaping a World Where Wireless Charging Knows No Limits...</h1>
              <p className="aboutParagraph text-gray-500 sm:text-lg text-sm ">
              To enable world to charge any battery operated devices wirelessly without distance constraint! </p>
              <button onClick={toggleVisionDrawer} className="font-bold mr-auto">Read More</button>
            </div>
          </div>

          {/* Vision Drawer */}
          <div
            className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${
              isVisionDrawerOpen ? "transform translate-y-0" : "transform translate-y-full"
            }`}
          >
            <div className=" max-h-96 md:pt-6 pt-20  p-6 flex justify-center flex-col items-center space-y-4 md:overflow-y-none overflow-y-auto">
              <h2 className="font-bold text-xl text-gray-800 AboutTitle">Vision</h2>
              <p className="text-gray-600 aboutParagraph">
              Vision – Our vision is to revolutionize the way the world powers devices by enabling wireless charging without any distance constraints. We aspire to lead the charge in the wireless energy sector, empowering people and industries alike to access efficient and limitless energy sources for all their devices. As we look towards the future, we see a world where every device, from smartphones to electric vehicles, can be charged wirelessly from anywhere, anytime, without the need for plugs, cords, or cables.
              </p>
              <button
                className="AboutTitle mt-4 font-bold text-white bg-gray-900 px-6 py-2 rounded-lg hover:bg-gray-950"
                onClick={toggleVisionDrawer}
              >
                Close
              </button>
            </div>
          </div>

          {/* Mission Section */}
          <div className="w-full flex flex-col md:flex-row justify-between max-w-7xl mx-auto space-x-8">
            <div className="flex justify-center items-center md:w-1/2">
              <img src={Mission} alt="About Us" className="rounded-xl w-[400px] h-[260px] object-cover shadow-md md:overflow-y-none overflow-y-auto"/>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/2">
              <p className="aboutParagraph text-gray-500">Mission</p>
              <h1 className="font-bold sm:text-2xl text-xl text-green-500">Empowering the Future of Wireless Charging, Anytime, Anywhere</h1>
              <p className="aboutParagraph text-gray-500 sm:text-lg text-sm">
              To provide wireless charging technology hardware & software 
solution to the people to enable to charge any device, by anytime, from 
anywhere without distance constraint! 
  </p>
              <button onClick={toggleMissionDrawer} className="font-bold mr-auto">Read More</button>
            </div>
          </div>

          {/* Mission Drawer */}
          <div
            className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${
              isMissionDrawerOpen ? "transform translate-y-0" : "transform translate-y-full"
            }`}
          >
            <div className=" max-h-96 md:pt-6 pt-20 p-6 flex justify-center flex-col items-center space-y-4 md:overflow-y-none overflow-y-auto">
              <h2 className="font-bold text-xl text-gray-800 AboutTitle">Mission</h2>
              <p className="text-gray-600 aboutParagraph">
              Our mission is to develop and provide cutting-edge wireless charging technology, including both hardware and software solutions, that will transform the way people charge their devices. We are committed to making charging more convenient, sustainable, and efficient by eliminating the traditional limitations of wired connections. With a focus on innovation and reliability, we aim to deliver solutions that can charge any device, at any time, from anywhere, helping to bring the vision of a wireless future to life.
              </p>
              <button
                className="AboutTitle mt-4 font-bold text-white bg-gray-900 px-6 py-2 rounded-lg hover:bg-gray-950"
                onClick={toggleMissionDrawer}
              >
                Close
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="mt-10">
    <Footer />
    </div>
    </div>
  );
}
