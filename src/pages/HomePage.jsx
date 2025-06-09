import React, { useState, useEffect, useMemo, useCallback } from 'react';
import theme from '../theme';
import env1 from '../../shared/envierment1.png';
import env2 from '../../shared/envierment2.png';
import products from '../../shared/products_data.json';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const banners = [env1, env2];
  const [current, setCurrent] = useState(0);
  const stripRefs = React.useRef({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const categories = useMemo(
    () => [
      { title: 'Top Oils', key: 'שמנים אתריים' },
      { title: 'Top Soaps', key: 'סבונים' },
      { title: 'Top Creams', key: 'קרמים' },
    ],
    []
  );
  const categoryLists = useMemo(
    () =>
      categories.map(({ title, key }) => ({
        title,
        items: products
          .filter((p) => p.category === key)
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5),
      })),
    [categories]
  );
  const recommended = useMemo(
    () => [...products].sort((a, b) => b.rating - a.rating).slice(0, 5),
    []
  );
  const handleAddToCart = useCallback((product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }, []);

  return (
    <div
      className="home-page"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <div
        className="carousel"
        style={{
          position: 'relative',
          height: '300px',
          overflow: 'hidden',
        }}
      >
        {banners.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Marketing Banner ${idx + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: current === idx ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        <button
          onClick={() =>
            setCurrent((current - 1 + banners.length) % banners.length)
          }
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            background: theme.colors.accent,
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
          }}
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((current + 1) % banners.length)}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            background: theme.colors.accent,
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
          }}
        >
          ›
        </button>
      </div>
      <main>
        <section>
          <h2 style={{ color: theme.colors.primary }}>
            Welcome to B-Healthy Shopi!
          </h2>
          <p>Discover our natural skincare products.</p>
        </section>
        {categoryLists.map(({ title, items, key }) => (
          <div key={title} className="product-strip">
            <div className="strip-header">
              <h3 style={{ color: theme.colors.secondary }}>{title}</h3>
              <Link
                to={`/catalog?category=${encodeURIComponent(key)}`}
                className="see-more"
              >
                See more
              </Link>
            </div>
            <div
              className="strip-grid"
              ref={(el) => (stripRefs.current[key] = el)}
            >
              {items.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            <div className="scroll-button-container">
              <button
                className="scroll-btn"
                onClick={() =>
                  stripRefs.current[key]?.scrollBy({
                    left: 300,
                    behavior: 'smooth',
                  })
                }
              >
                ›
              </button>
            </div>
          </div>
        ))}
        <div className="product-strip">
          <h3 style={{ color: theme.colors.secondary }}>
            Recommended Products
          </h3>
          <div className="strip-grid">
            {recommended.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
