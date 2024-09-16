import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-xs bg-transparent mx-auto cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.imageUrl} alt={product.title} className="object-contain w-full h-96" />
            <div className="p-8">
              <h5 className="text-lg font-semibold text-gray-800">{product.title}</h5>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-bold text-[#a57456]">{product.price}$</p>
                <button className="flex items-center text-black border border-black font-sans rounded-lg text-sm px-4 py-2">
                  ADD TO CART <FaShoppingCart className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12 my-8">
        <button className="text-white bg-[#c08b6e] px-8 py-3 hover:bg-[#a67654] transition">
          SHOW MORE
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;









