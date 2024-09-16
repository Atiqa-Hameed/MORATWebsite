import ProductGrid from "../ProductGrid"
import ExclusivePhoneSection from '../ExclusivePhoneSection';
import ProductsCategory from "../ProductsCategory";

const appliancesdata = [
    { id: 1, imageUrl: 'src/assets/app1.jpg', title: 'Blender', price: 200 },
    { id: 2, imageUrl: 'src/assets/app2.jpg', title: 'Water Dispenser', price: 150 },
    { id: 3, imageUrl: 'src/assets/app3.jpg', title: 'Coffe Glass', price: 50 },
    { id: 4, imageUrl: 'src/assets/app4.jpg', title: 'Kettle', price: 1200 },
    { id: 5, imageUrl: 'src/assets/app5.jpg', title: 'Toaster', price: 800 },
    { id: 6, imageUrl: 'src/assets/app6.jpg', title: 'Air Fryer', price: 1140 },
  ];
  const defaultCategories = [
    { category: 'HOME APPLIANCES', src: '/src/assets/Img1.png' },
    { category: 'OFFICE APPLIANCES', src: '/src/assets/Img2.jpeg' },
    { category: 'SMART PHONES', src: '/src/assets/Img3.jpeg' },
  ];
const Appliances = () => {
  return (
    <div>
    <ProductGrid products={appliancesdata}/>
    <ExclusivePhoneSection />
    <ProductsCategory categories={defaultCategories} />

    </div>
  )
}

export default Appliances
