// import CoutesPng from "../assets/Coutes.png";
import FacebookIcon from "../assets/facebookIcon.png";
import InstaIcon from "../assets/icons8-instagram-24.png";
import LinkdinIcon from "../assets/icons8-linkedin-24.png";
import YoutubeIcon from "../assets/icons8-youtube-24.png";
import Bg1 from "../assets/pexels-thisisengineering-3862365.jpg";
import Bg2 from "../assets/pexels-polina-zimmerman-3778619.jpg";

function Nonummy() {
    return (
        <div id="about" className=" aboutParagraph flex flex-col md:flex-row items-center mt-10 md:mt-20 gap-6 md:justify-center md:gap-12">
            <div className="flex  md:flex-row gap-4 md:gap-6">
                <img className="h-64 md:h-[450px] w-full object-cover rounded-lg shadow-lg" src={Bg1} alt="Background Image 1" />
                <img className="h-64 md:h-[450px] w-full object-cover rounded-lg shadow-lg" src={Bg2} alt="Background Image 2" />
            </div>
            <div className="w-full md:w-[600px] text-center md:text-left">
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl md:text-2xl text-green-500 font-bold">
                        We Help Propel Your Career to New Heights!
                    </h1>
                    <p className="text-3xl md:text-5xl font-bold">Cultivating Success</p>
                    <p className="text-lg md:text-xl">
                        YourHR is focused on transforming how organizations manage their
                        workforce by simplifying HR processes, enhancing employee
                        engagement, and boosting productivity.
                    </p>
                    {/* <img className="w-8 mx-auto size-5 ml-36 absolute top-[1740px] left-[560px] hidden sm:block" src={CoutesPng} alt="Quote Icon" /> */}
                    <p className="text-lg md:text-xl">
                        By leveraging advanced technology and best practices, we aim to
                        create a positive work culture and drive success for businesses in a
                        dynamic environment.
                    </p>
                </div>
                <div className="flex justify-center md:justify-start space-x-5 mt-5">
                    <img
                        className="h-10 w-10 md:h-12 md:w-12 bg-cover p-1 rounded-full object-contain hover:bg-green-300 transition duration-300"
                        src={FacebookIcon}
                        alt="Facebook Icon"
                    />
                    <img
                        className="h-10 w-10 md:h-12 md:w-12 bg-cover p-1 rounded-full object-contain hover:bg-green-300 transition duration-300"
                        src={InstaIcon}
                        alt="Instagram Icon"
                    />
                    <img
                        className="h-10 w-10 md:h-11 md:w-11 bg-cover p-1 rounded-full object-contain hover:bg-green-300 transition duration-300"
                        src={LinkdinIcon}
                        alt="LinkedIn Icon"
                    />
                    <img
                        className="h-10 w-10 md:h-12 md:w-12 bg-cover p-1 rounded-full object-contain hover:bg-green-300 transition duration-300"
                        src={YoutubeIcon}
                        alt="YouTube Icon"
                    />
                </div>
            </div>
        </div>
    );
}

export default Nonummy;