// import homePng from "../assets/cover3.jpg";
import homePng from "../assets/cover3-Photoroom.png";
import NavBar from "./NavToHome";

function LandingHome() {
  return (
      <div
        className="h-screen w-full bg-cover bg-center -z-10 overflow-hidden "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homePng})`,
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar className="text-white" />
        <div className="text-white min-h-screen flex flex-wrap justify-center flex-col items-center pb-40 gap-2 px-4">
          <h1 className="AboutTitle text-lg sm:text-xl md:text-2xl text-center">Wireless Charging Technology Company</h1>
          <h1 className=" extraBoldText text-3xl sm:text-4xl md:text-5xl font-bold text-center">Any Device, Any Time, Any Where</h1>
          <h1 className=" extraBoldText text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 text-center">No Distance Constraint </h1>
        </div>
      </div>
    
  );
}

export default LandingHome;