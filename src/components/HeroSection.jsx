
const HeroSection = () => {
  return (
    <div className="container mx-auto py-12 px-16">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4">
        
        {/* Left Large Image */}
        <div className="w-full h-[620px] md:h-[630px]">
          <img
            src="/src/assets/img1.jpg"
            alt="Large Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Grid with 4 Images */}
        <div className="grid grid-rows-2 gap-4">
          
          {/* Top Image */}
          <div className="w-full h-[325px]">
            <img
              src="/src/assets/clothe.png"
              alt="Top Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row with 2 Unequal Width Images */}
          <div className="grid grid-cols-[4fr_3fr] gap-4">
            <div className="w-full h-[288px]">
              <img
                src="/src/assets/img3.jpg"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[288px]">
              <img
                src="/src/assets/img4.jpg"
                alt="Image 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


