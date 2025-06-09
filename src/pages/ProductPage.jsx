import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../shared/products_data.json';

// Resolve image URLs including Hebrew-named files
const getImageSrc = (product) => {
  return product.image.startsWith('http')
    ? product.image
    : new URL(`../../${product.image}`, import.meta.url).href;
};

function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  // Memoize addToCart for performance
  const addToCart = useCallback(() => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }, [product]);
  if (!product) return <p>Product not found.</p>;
  // Determine the correct image URL
  const imageUrl = getImageSrc(product);

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={imageUrl} alt={product.name} loading="lazy" />
      <p>{product.detailedDescription}</p>
      <p>Ingredients: {product.ingredients.join(', ')}</p>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
