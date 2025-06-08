import React from 'react';
import theme from '../theme';
import './Footer.css';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: theme.colors.accent,
        color: theme.colors.text,
        padding: theme.spacing.medium,
        textAlign: 'center',
        borderTop: `1px solid ${theme.colors.border}`,
      }}
    >
      <span>&copy; </span>
      <p className="animated-credit">kst-apps</p>
    </footer>
  );
};

export default Footer;
