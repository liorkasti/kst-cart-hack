import React, { useState, useCallback, memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import products from '../../shared/products_data.json';
import { filterProducts } from '../utils/filter.js';
import './ProductCatalog.css';
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
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get('category') || '';
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const filtered = filterProducts(products, {
    searchTerm,
    category: categoryFilter,
  });
  const addToCart = useCallback((product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }, []);

  return (
    <div>
      <div className="catalog-filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="סבונים">סבונים</option>
          <option value="קרמים">קרמים</option>
          <option value="שמנים אתריים">שמנים אתריים</option>
        </select>
      </div>
      <h2>Product Catalog</h2>
      <div className="product-grid responsive-grid">
        {filtered.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-card-link"
            style={{ textDecoration: 'none' }}
          >
            <div className="product-card" onClick={(e) => e.stopPropagation()}>
              <img
                className="product-img"
                src={getImageSrc(product)}
                alt={product.name}
                loading="lazy"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default memo(ProductCatalog);
