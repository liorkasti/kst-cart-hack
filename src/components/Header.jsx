import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';
import './Header.css';
import logo from '../../shared/logo.png';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

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
        i'B-Healthy
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
        </ul>
        <ul style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {user ? (
            <li>
              <button
                onClick={logout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: theme.colors.text,
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" style={{ color: theme.colors.text }}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" style={{ color: theme.colors.text }}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
        {user && (
          <span style={{ color: theme.colors.primary }}>
            Hello, {user.name}
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
