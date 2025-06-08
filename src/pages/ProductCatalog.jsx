import React from 'react';
import products from '../../shared/products.json';

function ProductCatalog() {
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => {
          const safeCategory = product.category.replace(/\s+/g, '_');
          return (
            <div key={product.id} className="product-card">
              <img
                src={`/images/${safeCategory}/small/${product.id}-1.png`}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCatalog;
