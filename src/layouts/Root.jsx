import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root = () => {
  return (
    <div>
      <div
        className={`max-w-7xl mx-auto lg:px-4 font-fanwood min-h-[83vh] mb-[3.5px]`}
      >
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Root;
