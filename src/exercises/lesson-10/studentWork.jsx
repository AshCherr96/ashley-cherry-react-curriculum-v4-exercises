import React, { useState } from 'react';
import { Routes, Route } from 'react-router';

// Page Components
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Account from './pages/Account';
import NotFound from './pages/NotFound';

// Shared Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

import { products as productsData } from './data/products';

function StudentWork() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products] = useState(productsData);

  return (
    <div className="app-container">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <main style={{ padding: '2rem', minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          {isLoggedIn && <Route path="/account" element={<Account />} />}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default StudentWork;
