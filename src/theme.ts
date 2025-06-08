const theme = {
  colors: {
    primary: '#a37da3', // Soft Purple
    secondary: '#a3a37D', // Muted Olive
    background: '#FFFFFF', // White
    text: '#333333', // Darker Gray for better readability
    border: '#E0E0E0', // Subtle Light Gray
    accent: '#F4F4F4', // Very Light Gray for sections
    hover: '#D6D6D6', // Hover effect with a soft gray
    success: '#4CAF50', // Green for success messages
    error: '#F44336', // Red for error messages
    warning: '#FFC107', // Amber for warnings
    info: '#2196F3', // Blue for informational messages
    shadow: 'rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    responsive: '5vw', // Responsive spacing
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Clean and modern font
    fontSize: {
      small: '12px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  shadows: {
    light: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    heavy: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
};

export default theme;
