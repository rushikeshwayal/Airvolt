import LandingHome from "./LandingHome";
import Nonummy from './Nonummy';
import PlantCare from './PlantCare';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Feature from './Features';
import AboutUs from "./AboutUs";
import Leadership from "./Leadership";
import Board from "./Board";
import Technology from "./Technology";
import ProductServices from "./Product&Services";
function Home() {
    return(
        <div className="">
        <LandingHome />
        <AboutUs />
        <Nonummy />
         <PlantCare />
         <Feature />
         <Leadership/> 
         <Board />
         <Technology/>
         <ProductServices/>
       <Testimonial />
         <Footer />  
      </div>
    );
}

export default Home;