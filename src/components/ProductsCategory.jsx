
const ProductsCategory = ({ categories }) => {
  return (
    <div className="flex justify-center pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-20 mb-8 sm:mb-12 pt-8 sm:pt-12 px-4 sm:px-6 lg:px-12">
        {categories.map((item, index) => (
          <div key={index} className="relative h-40 sm:h-48 lg:h-60 lg:w-80">
            <img
              src={item.src}
              alt={item.category}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 p-2 sm:p-4 w-full">
              <h2 className="text-white font-sans text-xs sm:text-sm md:text-lg lg:text-2xl max-w-2">{item.category}</h2>
              <button className="mt-2 sm:mt-3 py-2 sm:py-3 px-6 sm:px-8 bg-[#c08b6e] text-white text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;



