import React from 'react';
import CartIcon from './CartIcon';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Ecommerce Store</div>
      <div className="cart-icon">
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
