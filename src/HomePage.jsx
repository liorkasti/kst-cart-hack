import React from 'react';

function HomePage() {
  return (
    <div>
      <header>
        <h1>Natural Skincare Products Store</h1>
        <nav>
          <a href="/register">Register</a>
          <a href="/catalog">Catalog</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>
      <main>
        <section>
          <h2>Welcome to our store!</h2>
          <p>Discover our natural skincare products.</p>
        </section>
        <section>
          <h3>Categories</h3>
          <div className="categories-grid">
            <div>Oils</div>
            <div>Soaps</div>
            <div>Creams</div>
          </div>
        </section>
        <section>
          <h3>Recommended Products</h3>
          <div className="products-grid">
            <div>Product 1</div>
            <div>Product 2</div>
            <div>Product 3</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
