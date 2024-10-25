import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import moratProductsIcon from '/MORAT LOGO.png';

const Footer = () => {
  return (
    <footer className="bg-[#c08b6e] text-white py-11 px-6 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section - Logo and Menu */}
        <div className="mb-8 sm:mb-10 md:mb-0 flex flex-col items-center md:items-start mt-[-2rem]">
          {/* Logo */}
          <img 
            src={moratProductsIcon} 
            alt="Morat Products" 
            className="w-40 h-28 sm:w-48 sm:h-32 -ml-6 sm:-ml-12" 
          />
          {/* Menu */}
          <div className="space-y-6 sm:space-y-8 text-center md:text-left">
            {/* Menu Heading */}
            <div className="text-lg font-semibold">
              <span>MENU</span>
              <hr className="border-t border-white mt-4 w-full md:w-80" />
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-2 gap-x-8 sm:gap-x-16 text-sm tracking-wide">
              <ul className="space-y-1 sm:space-y-2">
                <li className="font-semibold hover:underline cursor-pointer">
                  HOME
                </li>
                <li className="hover:underline cursor-pointer">ABOUT</li>
                <li className="hover:underline cursor-pointer">CLOTHES</li>
              </ul>
              <ul className="space-y-1 sm:space-y-2">
                <li className="hover:underline cursor-pointer">ACCESSORIES</li>
                <li className="hover:underline cursor-pointer">APPLIANCES</li>
                <li className="hover:underline cursor-pointer">
                  MORAT PRODUCTS
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          {/* Social Media Icons */}
          <div className="flex space-x-4 sm:space-x-5 md:space-x-6 mb-6 sm:mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center bg-[#d8bcad] text-white rounded-full hover:bg-gray-100 transition"
            >
              <FaInstagram className="text-base sm:text-lg md:text-xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center bg-[#d8bcad] text-white rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookSquare className="text-base sm:text-lg md:text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center bg-[#d8bcad] text-white rounded-full hover:bg-gray-100 transition"
            >
              <FaLinkedinIn className="text-base sm:text-lg md:text-xl" />
            </a>
          </div>

          {/* Description and Buttons */}
          <div className="bg-[#c5957c] rounded-3xl px-4 py-5 sm:px-5 sm:py-6 md:px-5 md:py-8 max-w-xs sm:max-w-sm flex flex-col text-center">
            <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base md:text-lg">
              LOREM IPSUM SIT AMETERO IRSEO
            </h3>
            <p className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black font-sans px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base rounded-full">
                LOREM IPSUM
              </button>
              <button className="bg-white text-black font-sans px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base rounded-full">
                LOREM IPSUM
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-16 sm:mt-20 md:mt-44 border-t border-white pt-4 text-center md:text-start text-[10px] sm:text-xs md:text-sm">
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


