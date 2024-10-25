const ImageGallery = () => {
  return (
    <div className="container mx-auto pt-14">
      <div
        className="grid grid-cols-4  mx-auto"
        style={{ gridTemplateRows: 'repeat(5, 1fr)', maxHeight: '600px' }} // Set max height for the grid
      >
        {/* Adjusted height for img7 */}
        <div className="col-span-2 row-span-2">
          <img
            src="/girls.png"
            alt="Image 1"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="row-span-2 col-start-1 row-start-3">
          <img
            src="/white.png"
            alt="Image 2"
            className="w-full h-full object-cover object-top max-h-72"
          />
        </div>
        <div className="row-span-2 col-start-2 row-start-3">
          <img
            src="/1img.png"
            alt="Image 3"
            className="w-full h-full object-cover object-top max-h-72"
          />
        </div>
        {/* Increased row-span for img10 */}
        <div className="row-span-3 col-start-3 row-start-1">
          <img
            src="/bangles.png"
            alt="Image 4"
            className="w-full h-full object-cover max-h-80"
          />
        </div>
        {/* Decreased row-span for img11 */}
        <div className="row-span-1 col-start-3 row-start-4">
          <img
            src="/browngirls.png"
            alt="Image 5"
            className="w-full h-full object-cover object-top max-h-44"
          />
        </div>
        <div className="row-span-4 col-start-4 row-start-1">
          <img
            src="/men.png"
            alt="Image 6"
            className="w-full h-full object-cover max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

