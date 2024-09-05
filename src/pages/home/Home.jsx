import { useLoaderData } from 'react-router-dom'
import Banner from '../home/Banner'
import RecentPosts from '../home/RecentPosts';
import Newsletter from '../home/Newsletter';
import DeveloperTools from '../home/DeveloperTools';

const Home = () => {
  
  return (
    <div className='space-y-16'>
      <Banner />
      <RecentPosts />
      <Newsletter />
      <DeveloperTools/>
    </div>
  )
}
export default Home