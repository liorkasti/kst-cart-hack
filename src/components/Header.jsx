import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';
import './Header.css';

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.accent,
        borderBottom: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
        width: '100%', // Ensure the header spans the full width
        boxSizing: 'border-box', // Include padding and border in width calculations
      }}
    >
      <div className="logo" style={{ color: theme.colors.primary }}>
        B-Healthy Shopi
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ color: theme.colors.text }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog" style={{ color: theme.colors.text }}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ color: theme.colors.text }}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/register" style={{ color: theme.colors.text }}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
