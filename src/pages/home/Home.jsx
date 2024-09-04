import { useLoaderData } from 'react-router-dom'
import Banner from '../home/Banner'
import RecentPosts from '../home/RecentPosts';

const Home = () => {
  
  return (
    <div className='space-y-16'>
      <Banner />
      <RecentPosts/>
    </div>
  )
}
export default Home