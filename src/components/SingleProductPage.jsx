import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ProductGrid from "./ProductGrid";

const SingleProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const newproducts = [
    { id: 1, imageUrl: '/src/assets/model1.jpg', title: 'Brown Printed', price: 99 },
    { id: 2, imageUrl: '/src/assets/model2.jpg', title: 'Peach Printed', price: 99 },
    { id: 3, imageUrl: '/src/assets/men1.jpg', title: 'Dark Brown', price: 99 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
      {product ? (
        <>
          {/* Product Title on Top */}
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-sans bg-[#a57456] text-white py-4 mb-8 md:mb-12">
              {product.title.toUpperCase()}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full max-w-md object-contain shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#a57456] tracking-wide">
                {product.title.toUpperCase()}
              </h1>
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                {product.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus."}
              </p>

              {/* Price */}
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#a57456]">
                ${product.price}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Add to Cart Button */}
                <button className="flex items-center justify-center border border-[#a57456] text-[#a57456] px-6 py-2 rounded-lg hover:bg-[#a57456] hover:text-white transition-all duration-300">
                  ADD TO CART <FaShoppingCart className="ml-2" />
                </button>

                {/* Buy Now Button */}
                <button className="bg-[#a57456] text-white px-6 py-2 rounded-lg hover:bg-[#a67654] transition-all duration-300">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-xl text-gray-500">Product not found</p>
      )}
      
      <div className="text-black text-center py-10 text-2xl sm:text-3xl md:text-4xl font-sans tracking-wide">
        TERMS & CONDITIONS <span className="mx-8">|</span> REVIEW STOCKS
      </div>

      <p className="pt-8 sm:pt-12 md:pt-16 text-start max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
        lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat
        lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt
        tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper
        quisque in. Magna fermentum, lacus, fermentum arcu.
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#a57456] text-center py-8 md:py-12">
        RELATED PRODUCTS
      </h1>
      <ProductGrid products={newproducts} />

      <div className="relative mt-8 sm:mt-12 lg:mt-16 my-8 sm:my-12 lg:my-16">
        {/* Image Section */}
        <img
          src="/src/assets/4.png"
          alt="Image"
          className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px] object-cover"
        />
      </div>
    </div>
  );
};

export default SingleProductPage;


























