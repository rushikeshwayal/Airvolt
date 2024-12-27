
import DropDownpng from '../assets/icons8-sort-down-30.png'
function AboutDropDown() {
    
function DropdownIn() {
    const DropDown = document.getElementById('DropDown');
    DropDown.style.display = 'block';
}

function DropdownOut() {
    const DropDown = document.getElementById('DropDown');
    DropDown.style.display = 'none';
}



    return(
        <div>
             <div className="relative text-white  ">
  <button 
    className=" rounded-lg gap-1 md:gap-5 flex justify-between px-5 py-2 items-center transition duration-300 hover:bg-white hover:text-black" 
    onMouseOver={DropdownIn} 
    onMouseOut={DropdownOut}
  >
   About

    <img className="h-5" src={DropDownpng} alt="Dropdown Icon" />
  </button>

  {/* Dropdown menu */}
  <ul 
    className="hidden absolute left-0 w-52 text-white shadow-lg pt-2 z-10"
    id="DropDown"
    onMouseOver={DropdownIn}
    onMouseOut={DropdownOut}
  >
    <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-start mr-5" href="#About">Our Story</a>
    </li>
    <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-start mr-5" href="/#Leadership">Leadership</a>
    </li>
     <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-start mr-5" href="/#Board" >Board of Advisor</a>
    </li>
  </ul>
</div>
        </div>
    );
}
export default AboutDropDown;