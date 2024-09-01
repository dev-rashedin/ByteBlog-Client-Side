import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import useTheme from '../hooks/useTheme';

const Root = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme}`}>
      <div
        className={`max-w-7xl mx-auto lg:px-4 font-fanwood ${theme?.colors?.background} ${theme?.colors?.textPrimary} min-h-[83vh] mb-[3.5px] col-span-5`}
      >
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Root;
