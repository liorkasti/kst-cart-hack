import React, { useState, useEffect } from 'react';
import theme from '../theme';
import env1 from '../../shared/envierment1.png';
import env2 from '../../shared/envierment2.png';

function HomePage() {
  const banners = [env1, env2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const categories = [
    'Top Oils',
    'Top Soaps',
    'Top Creams',
    'Recommended Products',
  ];

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
        {categories.map((category) => (
          <div key={category} className="product-strip">
            <h3 style={{ color: theme.colors.secondary }}>{category}</h3>
            <div className="product-list">
              {/* Placeholder for products */}
              <div
                className="product-card"
                style={{
                  backgroundColor: theme.colors.accent,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                Product 1
              </div>
              <div
                className="product-card"
                style={{
                  backgroundColor: theme.colors.accent,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                Product 2
              </div>
              <div
                className="product-card"
                style={{
                  backgroundColor: theme.colors.accent,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                Product 3
              </div>
            </div>
            <button
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
                border: `1px solid ${theme.colors.primary}`,
              }}
            >
              See More
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default HomePage;
