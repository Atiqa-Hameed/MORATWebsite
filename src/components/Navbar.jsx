import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        {/* Top section with contact, logo, and login/register */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-32">
          <a href="#home" className="text-2xl md:text-3xl hover:text-gray-600">
            CONTACT US
          </a>
          <NavLink to="/logoPage">
          <img 
            src="/src/assets/MORAT LOGO.png" 
            alt="Centered Image" 
            className="h-20 md:h-40"  
          />
          </NavLink>
  
          <a href="#login" className="text-2xl md:text-3xl hover:text-gray-600">
            LOGIN / REGISTER
          </a>
        </div>
  
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center items-center border-black border space-x-4 md:space-x-8 py-2 md:py-2">
          <NavLink to="/"><a href="#home" className="text-base md:text-lg hover:text-gray-600">HOME</a></NavLink>
          <NavLink to="/clothes"><a href="#clothes" className="text-base md:text-lg hover:text-gray-600">CLOTHES</a></NavLink>
          <NavLink to="/accessories"><a href="#accessories" className="text-base md:text-lg hover:text-gray-600">ACCESSORIES</a></NavLink>
          <NavLink to="/appliances"><a href="#appliances" className="text-base md:text-lg hover:text-gray-600">APPLIANCES</a></NavLink>
          <NavLink to="moratproducts"><a href="#morat-products" className="text-base md:text-lg hover:text-gray-600">MORAT PRODUCTS</a></NavLink>
          <a href="#about-us" className="text-base md:text-lg hover:text-gray-600">ABOUT US</a>
        </div>
      </>
    )
  }
  
  export default Navbar;
  
  
