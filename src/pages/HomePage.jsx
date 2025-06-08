import React from 'react';
import theme from '../theme';

function HomePage() {
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
