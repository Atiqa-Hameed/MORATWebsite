import FashionSaleSection from "../FashionSaleSection";
import ProductGrid from "../ProductGrid"
import ProductsCategory from "../ProductsCategory";

const Accessories = () => {
  const defaultCategories = [
    { category: 'Women\'s Clothes', src: '/cate.jpg' },
    { category: 'Men\'s Clothes', src: '/cate1.jpg' },
    { category: 'Accessories', src: '/16.jpg' }
  ];
    const newProducts = [
        { id: 1, imageUrl: '/ass1.jpg', title: 'Necklace', price: 120 },
        { id: 2, imageUrl: '/ass2.jpg', title: 'Beautiful Ring', price: 150 },
        { id: 3, imageUrl: '/ass3.jpg', title: 'Hoop Earings', price: 80 },
        { id: 4, imageUrl: '/ass4.jpg', title: 'Sunglasses', price: 90 },
        { id: 5, imageUrl: '/ass5.jpg', title: 'Bag', price: 110 },
        { id: 6, imageUrl: '/ass6.jpg', title: 'CAP', price: 60 },
      ];
  return (
    <div>
      <ProductGrid products={newProducts}/>
      <FashionSaleSection />
      <ProductsCategory categories={defaultCategories} />
    </div>
  )
}

export default Accessories
