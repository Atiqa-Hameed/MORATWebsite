import ProductGrid from "../ProductGrid";
import FashionSaleSection from '../FashionSaleSection';
import ProductsCategory from "../ProductsCategory";

const MoratProducts = () => {
    const newproducts = [
        { id: 1, imageUrl: '/model1.jpg', title: 'Brown Printed', price: 99 },
        { id: 2, imageUrl: '/model2.jpg', title: 'Peach Printed', price: 99 },
        { id: 1, imageUrl: '/ass1.jpg', title: 'Necklace', price: 120 },
        { id: 2, imageUrl: '/ass2.jpg', title: 'Beautiful Ring', price: 150 },
        { id: 5, imageUrl: '/app5.jpg', title: 'Toaster', price: 800 },
        { id: 6, imageUrl: '/app6.jpg', title: 'Air Fryer', price: 1140 },
      ];  
      const defaultCategories = [
        { category: 'Women\'s Clothes', src: '/cate.jpg' },
        { category: 'Men\'s Clothes', src: '/cate1.jpg' },
        { category: 'Accessories', src: '/16.jpg' }
      ];
  return (
    <div>
    <ProductGrid products={newproducts}/>
    <FashionSaleSection />
    <ProductsCategory categories={defaultCategories} />

    </div>
  )
}

export default MoratProducts
