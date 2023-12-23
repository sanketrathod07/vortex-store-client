import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import React, { useEffect } from 'react';
import Skelleton from './components/skull/Skelleton';
import Loading from './components/Loading';
import Products from './components/Products';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
