import homeIcon from '/home.png';
import clothesIcon from '/clothes-icon.svg';
import accessoriesIcon from '/accessories-icon.svg';
import appliancesIcon from '/appliances-icon.svg';
import moratProductsIcon from '/MORAT LOGO.png';
import sellerImage from '/best seller.png';

const CategoriesSection = () => {
  return (
    <div className="container mx-auto text-center py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8">CATEGORIES</h2>
      
      {/* Categories Icons */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center mb-8">
        {/* Category: Home */}
        <div className="flex flex-col items-center">
          <img src={homeIcon} alt="Home" className="w-20 h-20 mb-2"/>
          <span className="text-lg">HOME</span>
        </div>

        {/* Category: Clothes */}
        <div className="flex flex-col items-center">
          <img src={clothesIcon} alt="Clothes" className="w-20 h-20 mb-2"/>
          <span className="text-lg">CLOTHES</span>
        </div>

        {/* Category: Accessories */}
        <div className="flex flex-col items-center">
          <img src={accessoriesIcon} alt="Accessories" className="w-20 h-20 mb-2"/>
          <span className="text-lg">ACCESSORIES</span>
        </div>

        {/* Category: Appliances */}
        <div className="flex flex-col items-center">
          <img src={appliancesIcon} alt="Appliances" className="w-20 h-20 mb-2"/>
          <span className="text-lg">APPLIANCES</span>
        </div>

        {/* Category: Loja Products */}
        <div className="flex flex-col items-center">
          <img src={moratProductsIcon} alt="Morat Products" className="w-32 h-20 mb-2"/>
          <span className="text-lg">MORAT PRODUCTS</span>
        </div>
      </div>
      
      {/* Seller Image */}
      <div className="mb-8">
        <img src={sellerImage} alt="Become a Seller" className="w-2/6 h-full mx-auto"/>
      </div>

      {/* Become a Seller Button */}
      <div>
        <button className="bg-[#a57456] text-white px-6 py-4 rounded-xl">
          BECOME A SELLER
        </button>
      </div>
      <div className="container py-12">
      <div className="bg-[#d3cbcb] flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Text (Wider) */}
        <div className="flex-[1.2] lg:pr-8 text-center lg:text-center">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-black ">
            Casual<br /> 
            <span className="block text-7xl">DAILY STYLE</span>
          </h1>
          <p className="text-lg md:text-4xl text-[#c28966] mt-4 font-bold">
            ENJOY UPTO 50% OFF
          </p>
          <button className="mt-6 bg-[#c28966] text-white py-4 px-5 rounded-2xl font-bold text-2xl">
            SHOP NOW
          </button>
        </div>
    
        <div className="flex-1 mt-8 lg:mt-0">
          <img
            src="/men.jpg"
            alt="Casual Style"
            className="object-cover h-[550px] w-full shadow-md"
          />
        </div>
      </div>
    </div>
    


    </div>
  );
};

export default CategoriesSection;
