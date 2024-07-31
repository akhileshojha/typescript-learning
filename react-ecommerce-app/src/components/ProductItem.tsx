// src/components/ProductItem.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '../types';
import { addItemToCart } from '../redux/slices/cartSlice';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;