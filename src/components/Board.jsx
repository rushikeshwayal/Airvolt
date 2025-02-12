    import { Brush } from 'lucide-react';
    import { useState } from "react";
import Board1 from '../assets/Board1.jpg';
import star from "../assets/star.png";
    import Board2 from '../assets/Board2.jpg';
    import Board3 from '../assets/Board3.jpg';
    import Board4 from '../assets/Board4.jpg';
    import Board5 from '../assets/Board5.jpg';
    import Board6 from '../assets/Board6.jpg';
import NavBarToAll from './NavTOALL';
import Footer from './Footer';

    export default function Board() {
        const [isOurStoryDrawerOpen, setIsOurStoryDrawerOpen] = useState(false);
        const toggleOurStoryDrawer = () => setIsOurStoryDrawerOpen(!isOurStoryDrawerOpen);
        return (
          <div>
            <div className='pb-5'>
              <NavBarToAll />
            </div>
            <div id='Board' className='bg-white p-10 md:flex md:justify-center md:items-center w-full  -z-10'>
                {/* Title Section */}
                <div className='text-center mb-10 min-w-[60%]'>
                    <img src={star} className='h-8 absolute md:ml-40 -rotate-12' alt='none'/>
                    <h1 className='AboutTitle text-4xl text-gray-800 mb-4'>Our Leading, Strong Board</h1>
                    <p className='aboutParagraph text-gray-500 text-lg'>These people work on making our product the best.</p>
                    <button onClick={toggleOurStoryDrawer} className='aboutParagraph text-white py-2 px-6 mt-5 bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded-lg shadow-lg'>
                        Learn More
                    </button>
                </div>  
                <div
            className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-500 ease-in-out z-50 ${
              isOurStoryDrawerOpen ? "transform translate-y-0" : "transform translate-y-full"
            }`}
          >
            <div className="p-6 flex justify-center flex-col items-center space-y-4 ">
              <h2 className="font-bold text-xl text-gray-800 AboutTitle">About Board</h2>
              <p className="text-gray-600 aboutParagraph">
              {/* Company Incorporated back in January 2023, named as Vegeebook Solutions 
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
out the wireless charging. */}
                Comming Soon...!
              </p>
              <button
                className="AboutTitle mt-4 font-bold text-white bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600"
                onClick={toggleOurStoryDrawer}
              >
                Close
              </button>
            </div>
          </div>

                {/* Team Grid Section */}
                <div className='flex justify-center items-center flex-wrap  md:w-full  '>
                    <div className='flex justify-center items-center space-x-5'>
                        <img className='md:w-44 md:h-64 w-24 h-44 object-cover rounded-lg shadow-md' src={Board1} alt='Team Member 1' />
                        <img className='md:w-44 md:h-64 w-24 h-44 object-cover rounded-lg shadow-md mb-28' src={Board2} alt='Team Member 2' />
                        <img className='md:w-44 md:h-64 w-24 h-44 object-cover rounded-lg shadow-md' src={Board3} alt='Team Member 3' />
                    </div>
                    <div className='flex justify-center items-center md:gap-0 gap-36 '>
                        <img className='md:w-44 md:h-64  w-24 h-44 object-cover rounded-lg shadow-md md:mr-48' src={Board4} alt='Team Member 4' />
                        <img className='absolute md:w-44 md:h-64 w-24 h-44 object-cover rounded-lg shadow-md md:mb-28  ' src={Board5} alt='Team Member 5' />
                        <img className='md:w-44 md:h-64 object-cover w-24 h-44 rounded-lg shadow-md ml-5  ' src={Board6} alt='Team Member 6' />
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        );
    }
