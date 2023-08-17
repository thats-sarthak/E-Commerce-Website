import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
