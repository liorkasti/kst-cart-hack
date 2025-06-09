import React, { memo } from 'react';
import './ProductCard.css';
const getImageSrc = ({ category, id, image }) => {
  if (image.startsWith('http')) return image;
  if (category === 'סבונים')
    return new URL(`../../shared/soap_images/soap_${id}.png`, import.meta.url)
      .href;
  if (category === 'קרמים')
    return new URL(`../../shared/cream_images/cream_${id}.png`, import.meta.url)
      .href;
  if (category === 'שמנים אתריים')
    return new URL(`../../shared/oil_images/oil_${id}.png`, import.meta.url)
      .href;
  return new URL(`../../${image}`, import.meta.url).href;
};

const ProductCard = memo(({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={getImageSrc(product)} alt={product.name} loading="lazy" />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
));

export default ProductCard;
