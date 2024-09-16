import FashionSaleSection from "../FashionSaleSection";
import ProductGrid from "../ProductGrid"
import ProductsCategory from "../ProductsCategory";

const Accessories = () => {
  const defaultCategories = [
    { category: 'Women\'s Clothes', src: 'src/assets/cate.jpg' },
    { category: 'Men\'s Clothes', src: 'src/assets/cate1.jpg' },
    { category: 'Accessories', src: '/src/assets/16.jpg' }
  ];
    const newProducts = [
        { id: 1, imageUrl: 'src/assets/ass1.jpg', title: 'Necklace', price: 120 },
        { id: 2, imageUrl: 'src/assets/ass2.jpg', title: 'Beautiful Ring', price: 150 },
        { id: 3, imageUrl: 'src/assets/ass3.jpg', title: 'Hoop Earings', price: 80 },
        { id: 4, imageUrl: 'src/assets/ass4.jpg', title: 'Sunglasses', price: 90 },
        { id: 5, imageUrl: 'src/assets/ass5.jpg', title: 'Bag', price: 110 },
        { id: 6, imageUrl: 'src/assets/ass6.jpg', title: 'CAP', price: 60 },
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
