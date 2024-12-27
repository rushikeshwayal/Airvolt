import homePng from "../assets/homeBg.jpg";
import NavBar from "./NavToHome";

function LandingHome() {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center -z-10 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homePng})`,
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar className="text-white" />
        <div className="text-white min-h-screen flex flex-wrap justify-center flex-col items-center pb-40 gap-2 px-4">
          <h1 className="AboutTitle text-lg sm:text-xl md:text-2xl text-center">Your Career, Our Priority!</h1>
          <h1 className=" extraBoldText text-3xl sm:text-4xl md:text-7xl font-bold text-center">Connecting Talent with</h1>
          <h1 className=" extraBoldText text-3xl sm:text-4xl md:text-7xl font-bold text-green-400 text-center">Opportunity</h1>
        </div>
      </div>
    </div>
  );
}

export default LandingHome;