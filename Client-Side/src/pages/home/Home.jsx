import { useLoaderData } from 'react-router-dom'
import Banner from '../home/Banner'
import RecentPosts from '../home/RecentPosts';
import Newsletter from '../home/Newsletter';
import DeveloperTools from '../home/DeveloperTools';
import DeveloperTestimonial from '../home/DeveloperTestimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>ByteBlog || Home</title>
      </Helmet>
      <div className='space-y-16'>
        <Banner />
        <RecentPosts />
        <DeveloperTools />
        <DeveloperTestimonial />
        <Newsletter />
      </div>
    </div>
  );
}
export default Home