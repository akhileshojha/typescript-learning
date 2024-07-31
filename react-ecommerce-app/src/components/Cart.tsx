// src/components/Cart.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItemFromCart, clearCart } from '../redux/slices/cartSlice';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;