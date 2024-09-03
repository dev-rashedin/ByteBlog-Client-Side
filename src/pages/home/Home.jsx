import { useLoaderData } from 'react-router-dom'
import Banner from '../home/Banner'
import RecentPosts from './RecentPosts';

const Home = () => {
  const posts = useLoaderData();
  console.log(posts)
  
  return (
    <div className='space-y-8'>
      <Banner />
      <RecentPosts posts={posts} />
    </div>
  )
}
export default Home