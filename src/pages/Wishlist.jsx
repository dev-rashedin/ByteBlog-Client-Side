import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import SectionTitle from "../components/SectionTitle";
import { Fade } from "react-awesome-reveal";
import WishlistCard from "../components/WishlistCard";


const Wishlist = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  // getting wishlist data
  const {
    data: wishlists,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['wishlists'],
    queryFn: async () => {
      const email = user.email;
      const { data } = await axiosSecure.get(`/wishlists/${user?.email}`);

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

  // handling loading
  if (isLoading)
    return (
      <div className='flex items-center justify-center min-h-screen text-yellow-500'>
        Data Loading{' '}
        <span className='loading loading-dots loading-md mr-10'></span>
      </div>
    );
  
  console.log(wishlists)
  

  return (
    <div id='recent-posts' className='lg:pt-8 space-y-8 lg:space-y-10'>
      <SectionTitle title='Wishlist Posts' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mx-5 lg:mx-3'>
        {wishlists?.map((wishlist, index) => (
          <Fade
            key={wishlist._id}
            cascade
            damping={0.3}
            direction='up'
            triggerOnce
            duration={3000}
            delay={index * 200}
          >
           <WishlistCard wishlist={wishlist}/>
          </Fade>
        ))}
      </div>
    </div>
  );
}
export default Wishlist