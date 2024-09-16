const ImageStack = ({ title, image1, image2, image3 }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-60 h-32 sm:w-72 sm:h-36 lg:w-80 lg:h-44 mb-6">
        {/* Image 1 */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-lg transform translate-x-6 translate-y-4 rotate-12"
          src={image1}
          alt="Image 1"
        />   

        {/* Image 2 */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-lg transform translate-x-2 translate-y-4 -rotate-6"
          src={image2}
          alt="Image 2"
        />

        {/* Image 3 */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-lg transform translate-x-2 translate-y-2 rotate-2"
          src={image3}
          alt="Image 3"
        />
      </div>

      {/* Caption */}
      <p className="text-center text-xl font-sans mt-10">{title}</p>
    </div>
  );
};

// StackImages Component
const StackImages = () => {
  return (
    <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 justify-center py-4 px-4 lg:px-8 overflow-hidden">
      {/* Using ImageStack component with different images and captions */}
      <ImageStack
        title="CLOTHING"
        image1="/src/assets/img5.jpg"
        image2="/src/assets/img6.jpg"
        image3="/src/assets/img7.jpg"
      />
      <ImageStack
        title="ACCESSORIES"
        image1="/src/assets/img18.jpg"
        image2="/src/assets/img17.jpg"
        image3="/src/assets/16.jpg"
      />
      <ImageStack
        title="MORAT PRODUCTS"
        image1="/src/assets/img22.jpg"
        image2="/src/assets/img21.png"
        image3="/src/assets/img19.jpeg"
      />
    </div>
  );
};

export default StackImages;



