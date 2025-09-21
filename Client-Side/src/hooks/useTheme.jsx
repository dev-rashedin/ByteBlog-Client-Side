import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeProvider';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
