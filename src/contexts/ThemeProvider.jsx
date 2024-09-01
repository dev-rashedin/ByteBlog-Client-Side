import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

 const themes = {
   light: {
     colors: {
       primary: 'text-golden-saffron',
       background: 'bg-light-ash',
       textPrimary: 'text-midnight-indigo',
     },
   },
   dark: {
     colors: {
       primary: 'text-royal-amethyst',
       background: 'bg-midnight-indigo',
       textPrimary: 'text-light-ash',
     },
   },
 };

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => 
      prevTheme === 'light' ? 'dark' : 'light'
    );
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;