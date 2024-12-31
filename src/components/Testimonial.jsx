import MainBgJpg from '../assets/mainbg.jpg';
import Testo from './Testo';

function Testimonial() {
  return (
    <div id='testimonial' className=" relative w-full mt-0 min-h-screen -z-10">
      {/* Image Container */}
      <div
        className="w-full h-[850px] relative bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${MainBgJpg})` }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Text overlay (scrolls while image remains fixed) */}
      <div className="absolute top-0 w-full h-[850px] flex flex-col justify-start mt-10 items-center z-20 px-4 md:px-8 lg:px-16">
        <h1 className="text-green-400 text-lg font-bold aboutParagraph">Testimonial</h1>
        <h1 className="extraBoldText text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          What Our Clients Say?
        </h1>
      </div>

      {/* Testimonial cards in row */}
      <div className="w-full  flex flex-wrap justify-center items-center md:gap-5 gap-5 mt-10 md:mt-0 sm:flex-row z-20 absolute top-[100px] md:top-[250px] px-4 md:px-16">
        <Testo />
        <Testo />
      </div>
    </div>
  );
}

export default Testimonial;
