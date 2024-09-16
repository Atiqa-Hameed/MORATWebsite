import ProductGrid from "../ProductGrid";
import FashionSaleSection from '../FashionSaleSection';
import ProductsCategory from "../ProductsCategory";

const MoratProducts = () => {
    const newproducts = [
        { id: 1, imageUrl: 'src/assets/model1.jpg', title: 'Brown Printed', price: 99 },
        { id: 2, imageUrl: 'src/assets/model2.jpg', title: 'Peach Printed', price: 99 },
        { id: 1, imageUrl: 'src/assets/ass1.jpg', title: 'Necklace', price: 120 },
        { id: 2, imageUrl: 'src/assets/ass2.jpg', title: 'Beautiful Ring', price: 150 },
        { id: 5, imageUrl: 'src/assets/app5.jpg', title: 'Toaster', price: 800 },
        { id: 6, imageUrl: 'src/assets/app6.jpg', title: 'Air Fryer', price: 1140 },
      ];  
      const defaultCategories = [
        { category: 'Women\'s Clothes', src: 'src/assets/cate.jpg' },
        { category: 'Men\'s Clothes', src: 'src/assets/cate1.jpg' },
        { category: 'Accessories', src: '/src/assets/16.jpg' }
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
