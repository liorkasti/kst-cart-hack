import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
const soapImages = import.meta.glob('/shared/soap_images/soap_*.png', {
  eager: true,
  as: 'url',
});
const creamImages = import.meta.glob('/shared/cream_images/cream_*.png', {
  eager: true,
  as: 'url',
});
const oilImages = import.meta.glob('/shared/oil_images/oil_*.png', {
  eager: true,
  as: 'url',
});
const getImageSrc = ({ category, id, image }) => {
  if (image && image.startsWith('http')) return image;
  let map = null;
  if (category === 'סבונים') map = soapImages;
  else if (category === 'קרמים') map = creamImages;
  else if (category === 'שמנים אתריים') map = oilImages;
  if (map) {
    const prefix =
      category === 'סבונים' ? 'soap' : category === 'קרמים' ? 'cream' : 'oil';
    const key = `/shared/${prefix}_images/${prefix}_${id}.png`;
    if (map[key]) return map[key];
    const pool = Object.values(map);
    return pool[Math.floor(Math.random() * pool.length)];
  }
  // fallback to original image value or random category image
  if (image && (image.startsWith('/') || image.startsWith('http')))
    return image;
  const pool = Object.values(map || {});
  return pool.length ? pool[Math.floor(Math.random() * pool.length)] : '';
};

const ProductCard = memo(({ product, onAddToCart }) => (
  <Link
    to={`/product/${product.id}`}
    className="product-card-link"
    style={{ textDecoration: 'none' }}
  >
    <div className="product-card" onClick={(e) => e.stopPropagation()}>
      <img src={getImageSrc(product)} alt={product.name} loading="lazy" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  </Link>
));

export default ProductCard;
