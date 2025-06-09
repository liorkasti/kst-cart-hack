import React, { useCallback, memo } from 'react';
import products from '../../shared/products_data.json';
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
const getImageSrc = (product) => {
  if (product.image.startsWith('http')) return product.image;
  let map = null;
  if (product.category === 'סבונים') map = soapImages;
  else if (product.category === 'קרמים') map = creamImages;
  else if (product.category === 'שמנים אתריים') map = oilImages;
  if (map) {
    const prefix =
      product.category === 'סבונים'
        ? 'soap'
        : product.category === 'קרמים'
        ? 'cream'
        : 'oil';
    const key = `/shared/${prefix}_images/${prefix}_${product.id}.png`;
    if (map[key]) return map[key];
    const pool = Object.values(map);
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return product.image;
};

function ProductCatalog() {
  const addToCart = useCallback((product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={getImageSrc(product)} alt={product.name} loading="lazy" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProductCatalog);
