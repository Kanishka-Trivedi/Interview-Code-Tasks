import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './ProductDetails';

function DynamicRouting() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
        <h2>Dynamic Routing Example</h2>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/product/1" style={{ marginRight: '10px' }}>Product 1</Link>
          <Link to="/product/2">Product 2</Link>
        </nav>

        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default DynamicRouting;