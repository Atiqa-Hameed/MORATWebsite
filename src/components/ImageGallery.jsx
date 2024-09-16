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
            src="/src/assets/girls.png"
            alt="Image 1"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="row-span-2 col-start-1 row-start-3">
          <img
            src="/src/assets/white.png"
            alt="Image 2"
            className="w-full h-full object-cover object-top max-h-72"
          />
        </div>
        <div className="row-span-2 col-start-2 row-start-3">
          <img
            src="/src/assets/1img.png"
            alt="Image 3"
            className="w-full h-full object-cover object-top max-h-72"
          />
        </div>
        {/* Increased row-span for img10 */}
        <div className="row-span-3 col-start-3 row-start-1">
          <img
            src="/src/assets/bangles.png"
            alt="Image 4"
            className="w-full h-full object-cover max-h-80"
          />
        </div>
        {/* Decreased row-span for img11 */}
        <div className="row-span-1 col-start-3 row-start-4">
          <img
            src="/src/assets/browngirls.png"
            alt="Image 5"
            className="w-full h-full object-cover object-top max-h-44"
          />
        </div>
        <div className="row-span-4 col-start-4 row-start-1">
          <img
            src="/src/assets/men.png"
            alt="Image 6"
            className="w-full h-full object-cover max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;


// import React from 'react';

// const ImageGallery = () => {
//   return (
//     <div className="container mx-auto py-12">
//       <div
//         className="grid grid-cols-4 gap-2 mx-auto"
//         style={{ gridTemplateRows: 'repeat(2, 250px)', gridAutoRows: 'minmax(100px, auto)' }} // Set grid row sizes
//       >
//         {/* Top left image: Spans two columns and one row */}
//         <div className="col-span-2 row-span-1">
//           <img
//             src="/src/assets/img7.jpg"
//             alt="Image 1"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Top middle small image */}
//         <div className="col-span-1 row-span-1 ">
//           <img
//             src="/src/assets/img8.jpg"
//             alt="Image 2"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Right large image: Spans two rows */}
//         <div className="col-span-1 row-span-2">
//           <img
//             src="/src/assets/img9.jpg"
//             alt="Image 3"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Bottom left small image */}
//         <div className="col-span-1 row-span-1">
//           <img
//             src="/src/assets/img10.jpg"
//             alt="Image 4"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Bottom middle small image */}
//         <div className="col-span-1 row-span-1">
//           <img
//             src="/src/assets/img11.jpg"
//             alt="Image 5"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Bottom right small image */}
//         <div className="col-span-1 row-span-1">
//           <img
//             src="/src/assets/img12.jpg"
//             alt="Image 6"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;









// // Image paths (replace with your actual image paths)
// const images = [
//   { src: '/src/assets/img7.jpg', alt: 'Image 1', span: 'col-span-2 row-span-1' },  // First large image (top left)
//   { src: '/src/assets/img8.jpg', alt: 'Image 2', span: 'col-span-1 row-span-1' },  // Bracelet image (top center)
//   { src: '/src/assets/img9.jpg', alt: 'Image 3', span: 'col-span-1 row-span-1' },  // Man in black (top right)
//   { src: '/src/assets/img10.jpg', alt: 'Image 4', span: 'col-span-1 row-span-1' }, // Man with car (bottom-left)
//   { src: '/src/assets/img11.jpg', alt: 'Image 5', span: 'col-span-1 row-span-1' }, // Woman with hat (bottom-left center)
//   { src: '/src/assets/img12.jpg', alt: 'Image 6', span: 'col-span-1 row-span-1' }, // Two women (bottom-right)
// ];


// const ImageGallery = () => {
//   return (
//     <div className="grid grid-cols-4 grid-rows-2 gap-2 p-4 max-w-screen-lg mx-auto">
//       {/* Top row - 3 images */}
      
//       {/* Image 1: Spans two columns (top-left) */}
//       <div className="col-span-2 row-span-1">
//         <img
//           src={images[0].src}
//           alt={images[0].alt}
//           className="w-full h-auto max-h-48 object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Image 2: Spans one column (bracelet image, top-center) */}
//       <div className="col-span-1 row-span-1">
//         <img
//           src={images[1].src}
//           alt={images[1].alt}
//           className="w-full h-auto max-h-48 object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Image 3: Spans one column (man in black, top-right) */}
//       <div className="col-span-1 row-span-2">
//         <img
//           src={images[2].src}
//           alt={images[2].alt}
//           className="w-full h-auto max-h-48 object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Bottom row - 3 images */}
      
//       {/* Image 4: Spans one column (man with car, bottom-left) */}
//       <div className="col-span-1 row-span-1">
//         <img
//           src={images[3].src}
//           alt={images[3].alt}
//           className="w-full h-auto max-h-36 object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Image 5: Spans one column (woman with hat, bottom center-left) */}
//       <div className="col-span-1 row-span-1">
//         <img
//           src={images[4].src}
//           alt={images[4].alt}
//           className="w-full h-auto max-h-36 object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Image 6: Spans one column (two women, bottom center-right) */}
//       <div className="col-span-1 row-span-1">
//         <img
//           src={images[5].src}
//           alt={images[5].alt}
//           className="w-full h-auto max-h-36 object-cover rounded-lg shadow-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;




