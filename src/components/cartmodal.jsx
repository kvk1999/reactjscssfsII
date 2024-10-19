import React from 'react';

function CartModal({ cart, closeCart, removeFromCart }) {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <button className="close-modal" onClick={closeCart}>X</button>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="cart-details">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartModal;
