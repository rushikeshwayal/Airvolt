import { useState } from 'react';


function TechDropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseOver = () => setIsDropdownOpen(true);
  const handleMouseOut = () => setIsDropdownOpen(false);

  return (
    <div className="relative ">
      <button
        className="rounded-lg gap-1 md:gap-5 flex justify-between px-5 py-2 items-center transition duration-300 hover:bg-white hover:text-black"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <pre className='AboutTitle'>Technology ▽</pre>
        {/* <img className="h-5" src={DropDownpng} alt="TechDropdown Icon" /> */}
      </button>

      {/* TechDropdown menu */}
      <ul
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } absolute left-0 sm:w-52 w-40 shadow-lg pt-2 z-10`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
          <a className="block px-3 py-2 text-start " href="/product">
            Our Products
          </a>
        </li>
        <li className="hover:bg-gray-100 hover:text-black transition duration-300 rounded-lg">
          <a className="block px-3 py-2 text-start" href="/tech">
            Our Tech
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TechDropDown;
