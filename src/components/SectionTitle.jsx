import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SectionTitle = ({ title }) => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className='border-2 border-b-4  border-golden-saffron w-1/3 lg:w-1/4 mx-auto border-dashed p-1 rounded-xl '>
      <h2 className='text-xl font-semibold font-m-plus uppercase text-center '>
        {title}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
