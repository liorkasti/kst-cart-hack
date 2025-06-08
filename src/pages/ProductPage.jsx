import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../shared/products.json';

function ProductPage() {
  // Use locally generated large image for this product
  const safeCategory = product.category.replace(/\s+/g, '_');
  const localImage = `/images/${safeCategory}/large/${product.id}-1.png`;
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={localImage} alt={product.name} />
      <p>{product.detailedDescription}</p>
      <p>Ingredients: {product.ingredients.join(', ')}</p>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
