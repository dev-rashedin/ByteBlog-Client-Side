import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { BsEnvelopePaperHeart } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Newsletter = () => {

   const [email, setEmail] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const validateEmail = (email) => {
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return emailRegex.test(email);
  };
  
// handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setErrorMessage('');
     toast.success('Thank you for subscribing to our newsletter')
    } else {
      setErrorMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className='pt-4'>
      <SectionTitle title='Newsletter' />
      <div className=' mt-8 py-16  px-4 border-2 border-royal-amethyst border-dotted border-opacity-75 border-b-4 border-r-4 hover:scale-[1.01] hover:transition-all hover:border-dashed hover:duration-300 rounded-xl rounded-es-3xl rounded-se-3xl mx-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          {/* left side */}
          <div className='lg:col-span-2 my-4 -mt-2'>
            <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold py-2'>
              <BsEnvelopePaperHeart className='text-golden-saffron ml-1 mb-2' />
              Looking to Level Up Your Web Development Skills?
            </h1>
            <p>
              Join our newsletter for the latest tips, tricks, and updates on
              cutting-edge web development practices.
            </p>
          </div>
          {/* right side */}
          <div className='my-4 lg:border-l-2 border-royal-amethyst lg:-ml-12 lg:pl-8'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col sm:flex-row items-center justify-between w-full'
            >
              <input
                className='p-3 flex w-full rounded-md text-black border-2 border-royal-amethyst border-opacity-45'
                type='email'
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className='bg-royal-amethyst text-light-ash rounded-lg font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-golden-saffron hover:rounded-full font-m-plus'>
                Notify Me
              </button>
            </form>
            {errorMessage && (
              <p
                style={{ color: 'red', display: 'block', marginTop: '-15px' }}
              >
                {errorMessage}
              </p>
            )}
            <p>
              We care bout the protection of your data. Read our{' '}
              <span className='text-golden-saffron cursor-pointer  hover:font-semibold'>
                Privacy Policy.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
