import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import useTheme from '../hooks/useTheme';

const Root = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} ${theme?.colors?.background} ${theme?.colors?.textPrimary}`}
    >
      <div className={`max-w-7xl mx-auto lg:px-4 font-suse  min-h-[83vh] pb-8`}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Root;
