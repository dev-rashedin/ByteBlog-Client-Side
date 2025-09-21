import { useQuery } from "@tanstack/react-query";
import PostCard from "../../components/PostCard"
import axios from "axios";
import SectionTitle from "../../components/SectionTitle";
import {Fade} from "react-awesome-reveal"


const RecentPosts = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/recent-posts`
      );

      return data;
    },
    onError: (error) => {
      console.error('Error fetching data:', error);
    },
  });

// handling loading state
  if (isLoading)
    return (
      <div className='flex items-center justify-center min-h-screen text-yellow-500'>
        Data Loading{' '}
        <span className='loading loading-dots loading-md mr-10'></span>
      </div>
    );
  
  // handling error
  if (isError)
    return (
      <p className='flex items-center justify-center min-h-screen text-red-400'>
        {error.message}
      </p>
    );

  return (
    <div>
      <div id='recent-posts' className='lg:pt-8 space-y-8 lg:space-y-10'>
        <SectionTitle title='Recent Posts' />

        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mx-5 lg:mx-3'>
            {posts?.slice(0, 6).map((post, index) => (
              <Fade
                key={post._id}
                cascade
                damping={0.3}
                direction='up'
                triggerOnce
                duration={3000}
                delay={index * 200}
              >
                <PostCard post={post} type='blog' />
              </Fade>
            ))}
          </div>
      </div>
    </div>
  );
}
export default RecentPosts