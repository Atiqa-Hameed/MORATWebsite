import BigSaleSection from "../BigSaleSection";
import ProductsCategory from "../ProductsCategory";
import ProductGrid from "../ProductGrid";

const Clothes = () => {
  const defaultCategories = [
    { category: 'Women\'s Clothes', src: '/cate.jpg' },
    { category: 'Men\'s Clothes', src: '/cate1.jpg' },
    { category: 'Accessories', src: '/16.jpg' }
  ];
  const newproducts = [
    { id: 1, imageUrl: '/model1.jpg', title: 'Brown Printed', price: 99 },
    { id: 2, imageUrl: '/model2.jpg', title: 'Peach Printed', price: 99 },
    { id: 3, imageUrl: '/men1.jpg', title: 'Dark Brown', price: 99 },
    { id: 4, imageUrl: '/men2.jpg', title: 'Blue', price: 99 },
    { id: 5, imageUrl: '/men3.jpg', title: 'New Collection', price: 99 },
    { id: 6, imageUrl: '/model3.jpg', title: '3 Piece Printed', price: 99 },
  ];  
  return (
    <>
    <div className="relative"> 
      <img
        src="/hero.png"
        alt="Image 2"
        className="w-full object-cover object-top h-[700px] pt-12"
      />
      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#c08b6e] text-white px-9 py-4  hover:bg-[#a67654] transition">
        SHOP NOW
      </button>
    </div>
    <ProductsCategory categories={defaultCategories} />
    <ProductGrid products={newproducts}/>
    <BigSaleSection />
    </>
  );
};

export default Clothes;

