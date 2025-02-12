function AboutDropDownALL() {
    
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
<div className="relative">
  <button 
    className=" rounded-lg gap-1 md:gap-5 flex justify-between px-5 py-2 items-center transition duration-300 hover:bg-black hover:text-white" 
    onMouseOver={DropdownIn} 
    onMouseOut={DropdownOut}
  >
    <pre className='AboutTitle'>About ▽</pre>


    {/* <img className="h-5" src={DropDownpng} alt="Dropdown Icon" />
     */}
  </button>

  {/* Dropdown menu */}
  <ul 
    className="hidden absolute left-0 w-52  shadow-lg pt-2 z-10"
    id="DropDown"
    onMouseOver={DropdownIn}
    onMouseOut={DropdownOut}
  >
    <li className="hover:bg-black hover:text-white transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-start mr-5" href="/about-us">Our Story</a>
    </li>
    <li className="hover:bg-black hover:text-white transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-start mr-5" href="/leadership">Leadership</a>
    </li>
    <li className="hover:bg-black hover:text-white transition duration-300 rounded-lg">
      <a className="block px-3 py-2 text-start mr-5" href="/board" >Board of Advisor</a>
    </li>
  </ul>
</div>
        </div>
    );
}
export default AboutDropDownALL;