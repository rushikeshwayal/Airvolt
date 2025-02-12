import CEO from '../assets/CEO.jpg';
import { useState } from 'react';
import next from "../assets/next.png";
import NavBarToAll from './NavTOALL';
import Footer from './Footer';

export default function Leadership() {
  const [showNext, setShowNext] = useState(false); // Track whether to show the second text

  const onRightClick = () => {
    const leadershipText = document.getElementById('leadershipText');
    const leadershipText2 = document.getElementById('leadershipText2');

    leadershipText.classList.add('fade-out'); // Trigger fade-out animation
    setTimeout(() => {
      leadershipText.style.visibility = 'hidden'; // Use visibility instead of display to prevent layout shifts
      leadershipText2.style.visibility = 'visible';
      leadershipText2.classList.add('fade-in'); // Trigger fade-in animation
      setShowNext(true);
    }, 500); // Timeout duration matches the fade-out duration (500ms)
  };

  const onLeftClick = () => {
    const leadershipText = document.getElementById('leadershipText');
    const leadershipText2 = document.getElementById('leadershipText2');

    leadershipText2.classList.add('fade-out'); // Trigger fade-out animation
    setTimeout(() => {
      leadershipText2.style.visibility = 'hidden'; // Use visibility instead of display to prevent layout shifts
      leadershipText.style.visibility = 'visible';
      leadershipText.classList.add('fade-in'); // Trigger fade-in animation
      setShowNext(false);
    }, 500); // Timeout duration matches the fade-out duration (500ms)
  };

  return (
    <div>
      <div className='bg-gray-100 pb-5'>
      <NavBarToAll />
      </div>
    <div id="Leadership" className=" bg-gray-100 flex flex-col p-8 justify-center items-center space-y-12  ">
      
      {/* Title Section */}
      <h1 className=" extraBoldText  text-3xl md:text-4xl font-bold text-center text-green-500">Leadership</h1>

      {/* Leadership Team Section */}
      <div className='flex flex-wrap justify-center items-center p-8 md:gap-40'>
        <div className='flex flex-col items-center'>
          <div
            id='leadershipText'
            className={`absolute flex flex-col md:flex-col justify-center items-center space-y-2 md:space-y-0 md:space-x-10 md:max-w-7xl mx-auto px-4 transition-opacity ${showNext ? 'fade-out' : ''} `}
            style={{ visibility: showNext ? 'hidden' : 'visible' }}
          >
            <div className="md:max-w-xl w-full text-center md:text-left">
              <h2 className="text-2xl text-gray-800">Our Leadership</h2>
              <p className="text-lg mt-4 text-gray-600 md:leading-relaxed  md:mx-0">
              Founder & CEO – Keshav Hissal
              <br /> 
Driving Technology, Business Development & Operations. 
<br />
He has industry experience of 13 years and X-Founder of Vegeebook 
Solutions (OPC) Pvt Ltd. 
<br />
Researcher – “A calculus of Half Time” 
<br />
Author – Hosh Book 
              </p>
            </div>
            <div>
              <button
                onClick={onRightClick}
                id='SlideButton'
                className="mt-8 text-black rounded-full border-2 border-black font-semibold p-5 w-5 h-5 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                ▷
              </button>
            </div>
          </div>

          {/* Second Text Section (Initially hidden) */}
          <div
            id='leadershipText2'
            className={` flex flex-col md:flex-col justify-center items-center space-y-8 md:space-y-0 md:space-x-10 max-w-7xl mx-auto px-4 transition-opacity ${showNext ? 'fade-in' : 'opacity-0'}`}
            style={{ visibility: showNext ? 'visible' : 'hidden' }}
          >
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl text-gray-800">Vision</h2>
              <p className="text-lg mt-4 text-gray-600 md:leading-relaxed  md:mx-0">
                The vision of our leadership team is to create an environment that fosters innovation, collaboration, and a commitment to excellence. We aim to lead the industry by adopting cutting-edge technologies and building long-lasting relationships with our customers.
              </p>
              <p className='aboutParagraph text-end mt-5 mr-10'>- Keshav Hissal</p>
            </div>
            <div>
              <button
                onClick={onLeftClick}
                id='SlideButton'
                className="mt-8 text-black rounded-full border-2 border-black font-semibold p-5 w-5 h-5 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                ◁
              </button>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="flex flex-col items-center md:mt-0 mt-10">
          <img
            className="h-[500px] w-80 object-cover rounded-lg"
            src={CEO}
            alt="Keshav Hissal"
          />
          <h3 className="text-xl mr-auto font-semibold text-gray-800">Keshav Hissal</h3>
          <p className="text-xs mr-auto text-gray-500 font-medium">Founder & CEO</p>
        </div>
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        .fade-out {
          opacity: 0;
          transition: opacity 500ms ease-out;
        }

        .fade-in {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }
      `}</style>
    </div>
    <Footer />
    </div>
  );
}
