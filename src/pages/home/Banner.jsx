import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../home/Banner.css'

import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';

const items = [
  {
    id: 1,
    title: 'Exploring JS Ecosystem',
    description:
      "JavaScript is the driving force behind modern web development, powering everything from simple websites to complex web applications. As the most popular programming language in the world, it's essential for developers to understand its intricacies and vast ecosystem. JavaScript's versatility allows it to be used for both client-side and server-side development, making it a crucial skill for full-stack developers. In this section, we'll explore core concepts such as event-driven programming, prototypal inheritance, and asynchronous operations. Additionally, we’ll cover libraries and frameworks like React, Angular, and Vue.js, crucial for building dynamic, responsive applications.",
  },
  {
    id: 2,
    title: 'Front-End Frameworks Demystified',
    description:
      'The world of front-end development is ever-evolving with new frameworks and libraries emerging to streamline UI development. React, with its component-based architecture, has become a leader in this space. In this section, we’ll delve into React’s power and compare it with Angular and Vue.js. Learn to create reusable components, manage state effectively, and optimize applications for performance. We’ll also cover advanced concepts like server-side rendering, static site generation, and the latest React features including hooks and context API. Understanding these concepts will help build scalable, high-performance web applications that provide a seamless user experience.',
  },
  {
    id: 3,
    title: 'The Art of Responsive Design',
    description:
      'In today’s diverse digital landscape, users access websites from various devices, making responsive design a crucial skill. This section focuses on designing websites that look great and function smoothly across different screen sizes. Start with fluid grids, flexible images, and media queries to create adaptable layouts. Then explore advanced CSS techniques like flexbox and grid for complex layouts that remain responsive and visually appealing. We’ll also discuss accessibility to ensure your sites are usable by everyone, regardless of ability or device. By mastering responsive design, you’ll create a consistent and engaging user experience across all devices.',
  },
  {
    id: 4,
    title: 'Server-Side Technology',
    description:
      'While front-end development focuses on the user interface, server-side technologies handle the core functionality of web applications. This section explores key server-side technologies like Node.js, Express, and MongoDB. Node.js allows JavaScript to be used for server-side programming, enabling full-stack development with a single language. Express simplifies building robust APIs and web servers. MongoDB provides a flexible, scalable solution for data storage. Learn to set up servers, create RESTful APIs, and connect applications to databases. We’ll also cover authentication, security best practices, and performance optimization. By mastering these technologies, you’ll build scalable, efficient back-end systems for modern web applications.',
  },
];

const Banner = () => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className='flex flex-col-reverse lg:flex-row gap-x-4'>
      <div className=' relative lg:w-1/2 grid grid-cols-3 gap-2 h-[500px] m-5 lg:m-0'>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`${index === 1 || index === 2 ? 'col-span-2' : 'col-span-1'
              } bg-${index === 1 || index === 2 ? 'violet-500' : 'orange-400'
              } p-2 cursor-pointer rounded-md space-y-2 shadow-sm bg-opacity-75 rounded-r-[10%]`}
            onClick={() => setSelectedId(item.id)}
            transition={{ duration: 0.4 }}
            data-aos="zoom-in-right"
            data-aos-duration="3000"
          >
            <motion.div className='font-semibold'>{item.title}</motion.div>
            {index === 0 || index === 3 ? (
              <motion.div>
                <motion.h2>{item.description.slice(0, 110)}.....</motion.h2>
                <motion.button className='block border-black rounded-md px-2 mt-3 lg:mt-6 border-b-2 hover:scale-105'>
                  Read More
                </motion.button>
              </motion.div>
            ) : (
              <motion.div>
                <motion.h2>{item.description.slice(0, 250)}.....</motion.h2>
                <motion.button className='block border-black rounded-md px-2 mt-3 lg:mt-6 border-b-2 hover:scale-105'>
                  Read More
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <>
              {/* Blur Background within the div */}
              <motion.div
                className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)} // Close modal when clicking outside
                transition={{ duration: 0.3 }} // Smooth transition for blur
              />

              {/* Centered Selected Card within its own div */}
              <motion.div
                className='absolute top-[36%] left-[36%] transform -translate-x-1/3 -translate-y-1/3 bg-sky-600 p-8 rounded-md shadow-lg'
                initial={{ width: '0%', height: '0%', opacity: 0 }}
                animate={{ width: '90%', height: '80%', opacity: 1 }}
                exit={{ width: '0%', height: '0%', opacity: 0 }}
                transition={{ duration: 0.4 }} // Smooth transition for card
              >
                <motion.h5 className='mb-3 font-semibold'>
                  {items.find((item) => item.id === selectedId)?.title}
                </motion.h5>
                <motion.h2>
                  {items.find((item) => item.id === selectedId)?.description}
                </motion.h2>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className='mt-4 px-3 py-1 bg-orange-500 text-white rounded-full absolute -bottom-3 -right-3'
                >
                  X
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <div
        className='lg:w-1/2 h-[500px] m-5 lg:m-0'
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={2000}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          {/* slide 1 */}
          <SwiperSlide>
            <img
              className='h-[500px] w-full rounded-md'
              src={carousel1}
              alt=''
            />
          </SwiperSlide>
          {/* slide 2 */}
          <SwiperSlide>
            <img
              className='h-[500px] w-full rounded-md'
              src={carousel2}
              alt=''
            />
          </SwiperSlide>
          {/* slide 3 */}
          <SwiperSlide>
            <div>
              <img
                className='h-[500px] w-full rounded-md'
                src={carousel3}
                alt=''
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Banner;
