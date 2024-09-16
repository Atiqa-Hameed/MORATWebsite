
const ExclusivePhoneSection = () => {
  return (
    <div className="relative mt-4 sm:mt-8 lg:mt-6 my-8 sm:my-12 lg:my-16">
      {/* Image Section */}
      <img
        src="/src/assets/a2.png"
        alt="Exclusive Image"
        className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px] object-cover"
      />

      {/* Shop Now Button */}
      <button className="bg-[#d3cfcd] border-2 border-white rounded-full text-black font-bold py-1 px-4 sm:py-1 sm:px-4 md:py-2.5 md:px-8 lg:py-3 lg:px-9 absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-8 sm:left-10 md:left-10 lg:left-12 xl:left-16 transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-xl lg:text-2xl">
        Shop Now
      </button>
    </div>
  );
};

export default ExclusivePhoneSection;


