/* eslint-disable react/no-unescaped-entities */
import Marquee from 'react-fast-marquee';
// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Developer1 from '../../assets/dev1.jpg';
import Developer2 from '../../assets/dev2.jpg';
import Developer3 from '../../assets/dev3.jpg';
import Developer4 from '../../assets/dev4.jpg';
import Developer5 from '../../assets/dev5.jpg';
import Developer6 from '../../assets/dev6.jpg';
import SectionTitle from '../../components/SectionTitle';

const DeveloperTestimonial = () => {
  return (
    <div data-aos='fade-left' data-aos-duration='3000' className='pt-4'>

      <SectionTitle title='What developers say'/>
      <div className='rounded-lg shadow-md bg-midnight-indigo text-light-cream mt-8'>

        <Marquee className='flex py-6' pauseOnHover='true'>
          {/* slide 1 */}
          <div className='p-4 w-96 bg-blue-950 rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6'>
                ByteBlog has been an incredible resource for learning and
                sharing web development insights. The community is both
                supportive and knowledgeable.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Developer1}
                  alt='Developer'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Jane Doe</p>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 2 */}
          <div className='p-4 w-96 bg-blue-950 rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                I’ve learned so much from ByteBlog. The articles are in-depth,
                and the community discussions are very engaging and insightful.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Developer2}
                  alt='Developer'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>John Smith</p>
                  <p>Backend Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 3 */}
          <div className='p-4 w-96 bg-blue-950 rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                ByteBlog has been a game-changer for my career. The resources
                are always up-to-date and relevant, helping me stay ahead in my
                field.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Developer3}
                  alt='Developer'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Emily Davis</p>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 4 */}
          <div className='p-4 w-96 bg-blue-950 rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                ByteBlog's articles are a treasure trove of information. I
                frequently find valuable insights that help me tackle complex
                problems.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Developer4}
                  alt='Developer'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Michael Brown</p>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 5 */}
          <div className='p-4 w-96 bg-blue-950 rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                I highly recommend ByteBlog for anyone looking to deepen their
                understanding of web development. The content is both
                comprehensive and practical.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Developer5}
                  alt='Developer'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Sophia Wilson</p>
                  <p>DevOps Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 6 */}
          <div className='p-4 w-96 bg-blue-950 rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                ByteBlog has been my go-to source for web development trends and
                best practices. The quality of the content is unmatched.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Developer6}
                  alt='Developer'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Olivia Johnson</p>
                  <p>UX/UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default DeveloperTestimonial;
