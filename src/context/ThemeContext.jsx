import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === null) localStorage.setItem('theme', false);
    if (localTheme) setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem('theme', !theme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
