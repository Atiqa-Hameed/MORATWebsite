import ProductsCategory from "../ProductsCategory";
import ImageGallery from "../ImageGallery";
import FashionSaleSection from "../FashionSaleSection";
const LogoPage = () => {
  const defaultCategories = [
    { category: 'Women\'s Clothes', src: 'src/assets/cate.jpg' },
    { category: 'Men\'s Clothes', src: 'src/assets/cate1.jpg' },
    { category: 'Accessories', src: '/src/assets/16.jpg' }
  ];
  return (
    <>
      <div className="relative flex items-center justify-center py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14 bg-white overflow-hidden mt-12">
        {/* Circular Logo */}
        <div className="relative flex items-center justify-center">
          <div className="w-[200px] xs:w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex items-center justify-center">
            <img
              src="src/assets/MORAT LOGO.png" // Replace this with the correct path to your logo
              alt="Loja Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start mt-8 xs:mt-12 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-36 -ml-6 xs:-ml-8 sm:-ml-12 md:-ml-16 lg:-ml-16 xl:-ml-16">
          {/* MORAT Text */}
          <div className="bg-[#c1886c] w-36 xs:w-44 sm:w-56 md:w-72 lg:w-72 xl:w-80 py-1 xs:py-2 sm:py-2 md:py-3 lg:py-3">
            <h1 className="text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans text-white text-center">
              MORAT
            </h1>
          </div>

          {/* MANUFACTURING Text */}
          <div className="bg-[#c1886c] py-2 xs:py-3 sm:py-4 px-6 xs:px-12 sm:px-12 md:px-16 lg:px-16 xl:px-16 mt-2 xs:mt-2 sm:mt-3">
            <h2 className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans text-white text-center">
              MANUFACTURING
            </h2>
          </div>
        </div>
      </div>
      <ProductsCategory categories={defaultCategories} />
      <div className="flex justify-center mt-8 my-8">
        <button className="text-white bg-[#c08b6e] px-10 py-3 hover:bg-[#a67654] transition">
          OWN BY MORAT
        </button>
      </div>
      <ImageGallery />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-14 py-14">
        {/* Left Text */}
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] text-center md:text-left">
            SELLER ACCOUNT
          </h2>
        </div>

        {/* Right Button */}
        <div className="flex items-center justify-center md:justify-end">
          <button className="bg-[#c08b6e] text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-[#a67654] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            BECOME A SELLER
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-12 w-full py-10 px-4 sm:px-6 md:px-16">
        {/* Circular Image Section */}
        {[
          {
            src: "src/assets/tradecenter.jpg",
            alt: "Siddique Trade Center",
            label: "SIDDIQUE TRADE CENTER",
          },
          {
            src: "src/assets/imperial.jpg",
            alt: "Imperial Mall",
            label: "IMPERIAL MALL",
          },
          {
            src: "src/assets/xinhua.jpg",
            alt: "Xinhua Mall",
            label: "XINHUA MALL",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] bg-white rounded-full overflow-hidden shadow-md">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-sans mt-4">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
      <FashionSaleSection />
    </>
  );
};

export default LogoPage;
