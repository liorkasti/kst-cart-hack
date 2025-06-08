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
      <p>&copy; 2023 B-Healthy Shopi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
