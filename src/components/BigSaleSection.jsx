
const BigSaleSection = () => {
  return (
    <section className="relative w-full h-screen bg-beige flex items-center justify-center overflow-hidden mb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/two girls.jpg"
          alt="Big Sale Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Big Sale */}
        <h1 className="text-5xl md:text-[13rem] font-extrabold tracking-tight leading-none text-black relative">
          BIG SALE
          
          {/* Repeated Sale Text - overlay on BIG SALE */}
          <div className="absolute inset-0 flex items-center justify-center mt-8 md:mt-[2.5rem]">
            <p className="text-white text-xs md:text-lg uppercase bg-[#c09f8a] px-1 py-2 tracking-normal whitespace-nowrap">
              BIG SALE - BIG SALE - BIG SALE - BIG SALE - BIG SALE - BIG SALE - BIG SALE - BIG SALE - BIG SALE 
            </p>
          </div>
        </h1>

        {/* Get 50% Off */}
        <div className="text-center bg-[#C69C81] px-20 py-2 md:px-32 md:py-4 mt-[-16px] md:mt-[-24px] inline-block">
          <p className="text-lg md:text-5xl font-semibold text-white uppercase">
            Get 50% Off
          </p>
        </div>
      </div>

      {/* Vertical Lines */}
      <div className="absolute top-0 bottom-0 left-8 w-[12px] bg-[#C69C81]"></div>
      <div className="absolute top-0 bottom-0 left-14 w-[2px] bg-[#C69C81]"></div>
      <div className="absolute top-0 bottom-0 right-8 w-[12px] bg-[#C69C81]"></div>
      <div className="absolute top-0 bottom-0 right-14 w-[2px] bg-[#C69C81]"></div>

      {/* Top Text */}
      <div className="absolute top-4 left-0 right-0 flex items-center justify-center z-20">
        <span className="w-[20%] sm:w-[30%] md:w-[40%] h-[1px] bg-white mr-2"></span>
        <p className="text-center text-xs sm:text-sm md:text-xl font-light tracking-wider text-white uppercase whitespace-nowrap">
          Special Sale for Spring Season
        </p>
        <span className="w-[20%] sm:w-[30%] md:w-[40%] h-[1px] bg-white ml-2"></span>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center z-20">
        <span className="w-[20%] sm:w-[30%] md:w-[40%] h-[1px] bg-white mr-2"></span>
        <p className="text-center text-xs sm:text-sm md:text-xl font-light tracking-wider text-white uppercase whitespace-nowrap">
          Enjoy discount &amp; shop happily
        </p>
        <span className="w-[20%] sm:w-[30%] md:w-[40%] h-[1px] bg-white ml-2"></span>
      </div>
    </section>
  );
};

export default BigSaleSection;




