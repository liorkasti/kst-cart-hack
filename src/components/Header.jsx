import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';
import './Header.css';
import logo from '../../shared/logo.png';

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.accent,
        borderBottom: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div className="logo">
        <img src={logo} alt="Website Logo" style={{ height: '40px' }} />
      </div>
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
