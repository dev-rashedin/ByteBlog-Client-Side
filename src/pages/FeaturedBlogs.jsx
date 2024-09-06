import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogTable from "./BlogTable";
import SectionTitle from "../components/SectionTitle";



const FeaturedBlogs = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/featured-posts`
      );

      return data;
    },
    onError: (error) => {
      console.log('Error fetching data:', error);
    },
  });

  // handling error
  if (isError)
    return (
      <p className='flex items-center justify-center min-h-screen text-red-400'>
        {error.message}
      </p>
    );

  // handling loading state
  if (isLoading)
    return (
      <div className='flex items-center justify-center min-h-screen text-yellow-500'>
        Data Loading{' '}
        <span className='loading loading-dots loading-md mr-10'></span>
      </div>
    );

  return <div>
    <SectionTitle title='Featured Blogs'/>
    <BlogTable posts={posts} />
  </div>;
}
export default FeaturedBlogs