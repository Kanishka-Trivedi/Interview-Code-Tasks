import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Product Details</h3>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetail;