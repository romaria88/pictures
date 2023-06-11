import React from 'react';
import PhotoProvider from './PhotoContext';
import ThemeProvider from './ThemeContext';

const GlobalStateProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <PhotoProvider>{children}</PhotoProvider>
    </ThemeProvider>
  );
};

export default GlobalStateProvider;
