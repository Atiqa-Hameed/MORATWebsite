
const FashionSaleSection = () => {
  return (
    <div className="relative mt-4 sm:mt-8  lg:mt-6 my-8 sm:my-12 lg:my-16">
      {/* Image Section */}
      <img
        src="/ima.png"
        alt="Fashion Image"
        className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
      />

      {/* Shop Now Button */}
      <button className="bg-black text-white font-bold py-1.5 px-4 sm:py-2 sm:px-5 md:py-2.5 md:px-6 lg:py-3 lg:px-7 absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-12 transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-base lg:text-lg">
        SHOP NOW
      </button>
    </div>
  );
}

export default FashionSaleSection;



