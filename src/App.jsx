import Navbar from "./components/Navbar"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Clothes from "./components/pages/Clothes"
import LogoPage from "./components/pages/LogoPage"
import Accessories from "./components/pages/Accessories"
import Appliances from "./components/pages/Appliances"
import MoratProducts from "./components/pages/MoratProducts"
import SingleProductPage from "./components/SingleProductPage"

const App = () => {
  const products = [
    { id: 1, title: 'Brown Printed', description: 'A beautiful brown printed dress.', price: 99, imageUrl: '/src/assets/model1.jpg' },
    { id: 2, title: 'Peach Printed', description: 'A stylish peach printed dress.', price: 99, imageUrl: '/src/assets/model2.jpg' },
    { id: 3, title: 'Dark Brown', description: 'A fashionable dark brown outfit.', price: 99, imageUrl: '/src/assets/men1.jpg' },
    { id: 4, title: 'Blue', description: 'A trendy blue outfit.', price: 99, imageUrl: '/src/assets/men2.jpg' },
    { id: 5, title: 'New Collection', description: 'A fresh collection of trendy outfits.', price: 99, imageUrl: '/src/assets/men3.jpg' },
    { id: 6, title: '3 Piece Printed', description: 'An elegant 3-piece printed outfit.', price: 99, imageUrl: '/src/assets/model3.jpg' },
  ];
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/clothes" element={<Clothes />} />
    <Route path="/logoPage" element={<LogoPage />} />
    <Route path="/accessories" element={<Accessories/>} />
    <Route path="/appliances" element={<Appliances/>} />
    <Route path="/moratproducts" element={<MoratProducts/>} />
    <Route path="/product/:id" element={<SingleProductPage products={products} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
