import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure you have the necessary styles

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);
    if (isProductInCart) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Toggle modal for cart
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <header className="navbar">
        <h1>Fake Store</h1>
        <button onClick={toggleModal}>
          Cart ({cart.length})
        </button>
      </header>

      <main>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Modal */}
      {isModalOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <button className="close-modal" onClick={toggleModal}>X</button>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cart.map((product) => (
                  <li key={product.id}>
                    <img src={product.image} alt={product.title} width="50" />
                    <span>{product.title} - ${product.price.toFixed(2)}</span>
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
