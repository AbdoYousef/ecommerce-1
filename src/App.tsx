// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Home from './pages/Home/Home';
// import Product from './pages/Product/Product';
// import Cart from './pages/Cart/Cart';
// import Checkout from './pages/Checkout/Checkout';
import React, { useState, useEffect } from 'react';
import './App.scss';
import Preloader from './components/preLoader/Preloader';
import { NavBar } from './components/NavBar/NavBar'
import { SideCarousel } from './components/side-carousel/SideCarousel';
import { ProductsSec } from './components/productsSec/ProductsSec';
import { CategorySec } from './components/CategorySec/CategorySec';
import { BestSellingSec } from './components/BestSelling/BestSellingSec';
import { NewArrival } from './components/NewArrival/NewArrival';
import ScrollToTop from './components/Buttons/ScrollToTop';
import Footer from './components/Footer/Footer';
function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate data fetching or other async operations
    setTimeout(() => {
      setIsLoading(false);
    }, 100); // Adjust the delay as needed
  }, []);
  return (
    <>
    {isLoading && <Preloader isLoading={isLoading} />}
      <NavBar/>
      <ScrollToTop />
      <SideCarousel />
      <ProductsSec 
          header= 'Today’s'  
          mainTopic='Flash Sales'
          showCountdown
          carouselArrows
          getCarouselClass="prod-carousel"
          prodCarlClassMain='prod-carousel'
      />

      <hr className='container' />

      <CategorySec 
          header= 'Categories'  
          mainTopic='Browse By Category'
          carouselArrows
          getCarouselClass="cat-carousel"
          prodCarlClassMain='cat-carousel'
      />

      <hr className='container' />

      <BestSellingSec 
          header= 'This Month'  
          mainTopic='Best Selling Products'
      />
      <hr className='container' />

      <NewArrival 
      header= 'Featured'  
      mainTopic='New Arrival'
      />
      
      <Footer />



      {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      </Router> */}
    </>

  )
}

export default App
