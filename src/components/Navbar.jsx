import React from 'react';

function Navbar({ cartCount, openCart }) {
  return (
    <nav className="navbar">
      <h1>KVK Store</h1>
      <div className="cart-section">
        <button onClick={openCart}>Cart ({cartCount})</button>
      </div>
    </nav>
  );
}

export default Navbar;
