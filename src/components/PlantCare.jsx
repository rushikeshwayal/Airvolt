
import Plant1Jpg from "../assets/DrivingStudent.jpg"
import Plant2Jpg from "../assets/DrivingStudent2.jpg"

function PlantCare() {
    return(
       <div  className=" flex flex-wrap justify-center relative mt-20 sm:flex-row flex-col ">
  {/* First image with dark overlay */}
  <div className="relative sm:w-[50%] h-[400px]">
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <img className="w-full  relative z-0 h-[400px] bg-cover object-cover" src={Plant1Jpg} alt="Plant1" />
    <div className="absolute inset-0 flex justify-center text-start  flex-col ml-10 gap-3 z-20">
      <h1 className="boldText text-white text-2xl font-bold">Driving Excellence Together</h1>
      <p className="text-white text-xl mb-20">we aim to create a positive work culture and drive success.</p>
      <a className="text-white text-sm font-bold hover:text-green-500" href=".">Apply Now →</a>
    </div>
  </div>

  {/* Second image with dark overlay */}
  <div className="relative sm:w-[50%] hidden sm:block">
    <div className="absolute inset-0 bg-black/55 z-10"></div>
    <img className="w-full  relative z-0 h-[400px] bg-cover object-cover" src={Plant2Jpg} alt="Plant1" />
    <div className="absolute inset-0 flex justify-center text-start  flex-col ml-10 gap-3 z-20">
      <h1 className="boldText text-white text-2xl font-bold">Connecting People and Potential</h1>
      <p className="text-white text-xl mb-20">Connect with industry leaders and peers to share knowledge.</p>
      <a className="text-white text-sm font-bold hover:text-green-500" href=".">Apply Now →</a>
    </div>
  </div>
</div>

    );
}

export default PlantCare;
