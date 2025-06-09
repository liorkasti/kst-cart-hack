import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../shared/products_data.json';
import './ProductPage.css';

const soapImages = import.meta.glob('../../shared/soap_images/soap_*.png', {
  eager: true,
  as: 'url',
});
const creamImages = import.meta.glob('../../shared/cream_images/cream_*.png', {
  eager: true,
  as: 'url',
});
const oilImages = import.meta.glob('../../shared/oil_images/oil_*.png', {
  eager: true,
  as: 'url',
});

const getImageSrc = (product) => {
  const { image, category, id } = product;
  if (image.startsWith('http')) return image;
  let map =
    category === 'סבונים'
      ? soapImages
      : category === 'קרמים'
      ? creamImages
      : oilImages;
  if (map) {
    const prefix =
      category === 'סבונים' ? 'soap' : category === 'קרמים' ? 'cream' : 'oil';
    const key = `../../shared/${prefix}_images/${prefix}_${id}.png`;
    if (map[key]) return map[key];
    const pool = Object.values(map);
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return image.startsWith('/') || image.startsWith('http')
    ? image
    : `/${image}`;
};

function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const addToCart = useCallback(() => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }, [product]);
  if (!product) return <p>Product not found.</p>;
  const imageUrl = getImageSrc(product);

  return (
    <div className="product-page">
      <div className="product-main">
        <img
          className="product-image"
          src={imageUrl}
          alt={product.name}
          loading="lazy"
        />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price}</p>
          <p className="ingredients">
            Ingredients: {product.ingredients.join(', ')}
          </p>
          <button className="add-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-details">
        <h3>Description</h3>
        <p>{product.detailedDescription}</p>
      </div>
    </div>
  );
}

export default ProductPage;
