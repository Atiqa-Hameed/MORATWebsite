import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai'; // Importing the down arrow icon

const Header = () => {
  return (
    <header className="bg-[#C69C81] text-white md:p-0">

      <div className="container flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side - Country dropdown and Free Delivery */}
        <div className="space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row items-center  ">
          <button className="border-gray-700 border pr-12 pl-12 text-white h-[50px] flex items-center space-x-4">
            <p>COUNTRY</p>
            <AiFillCaretDown className="ml-1 text-xl" /> {/* Down arrow icon */}
          </button>
          <span className="font-mono">FREE DELIVERY</span>
        </div>
        
        {/* Right side - Social Media Icons */}
        <div className="flex space-x-6 items-center pt-4 md:pt-0 pr-12">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaInstagram className="text-3xl md:text-4xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaFacebook className="text-3xl md:text-4xl" />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;

