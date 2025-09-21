import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const WishlistCard = ({ wishlist }) => {
  const queryClient = useQueryClient();

  const axiosSecure = useAxiosSecure();

  // destructuring post
  const {
    _id,
    post_title,
    category,
    email,
    image,
    short_description,
    createdAt,
  } = wishlist;

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {          
      const { data } = await axiosSecure.delete(`/wishlists/${id}`, id);

      return data;
    },
    onSuccess: (data) => {
      if (data.deletedCount > 0) {
        toast.success('Successfully removed from wishlist');

        queryClient.invalidateQueries({ queryKey: ['wishlists'] });
      }
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || 'Failed to remove from wishlist';
      toast.error(errorMessage);
    },
  });

  const handleRemoveWishlist = async (id) => {
    try {
      await mutateAsync(id);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className='max-w-2xl px-8 py-4 rounded-lg shadow-xl border-2 border-royal-amethyst border-opacity-75 border-t-4 border-r-4 border-dotted hover:scale-[1.01] hover:transition-all hover:border-dashed hover:duration-300 rounded-se-3xl rounded-es-3xl'>
      {/* time and category */}
      <div className='flex items-center justify-between'>
        <p className='text-sm font-light opacity-95'>
          {new Date(createdAt).toLocaleString()}
        </p>
        <p
          className={`px-3 py-1 text-sm font-bold ${
            wishlist.category === 'HTML/CSS' &&
            'text-blue-600 bg-blue-200 bg-opacity-75'
          } ${
            wishlist.category === 'JavaScript' &&
            'text-emerald-600 bg-emerald-200 bg-opacity-75'
          } ${
            wishlist.category === 'Node JS' &&
            'text-pink-600 bg-pink-200 bg-opacity-75'
          } ${
            wishlist.category === 'MongoDB' &&
            'text-yellow-600 bg-yellow-200 bg-opacity-75'
          } ${
            wishlist.category === 'React JS' &&
            'text-purple-600 bg-purple-200 bg-opacity-75'
          } rounded-full px-2 font-m-plus`}
        >
          {category}
        </p>
      </div>

      <div className='mt-2'>
        <img
          className='rounded-xl mx-auto md:w-full h-[200px] mb-4 mt-4'
          src={image}
          alt=''
        />
        <p className='text-lg font-bold '>{post_title}</p>

        <p className='mt-2'>{short_description.slice(0, 75)}....</p>
      </div>

      {/* read more & wishlist btn */}
      <div className='flex items-center justify-between mt-4'>
        <Link
          to={`/posts/${_id}`}
          className='text-golden-saffron font-semibold hover:underline '
        >
          Read more
        </Link>

        <div className='flex items-center'>
          <button
            onClick={() => handleRemoveWishlist(_id)}
            className='font-semibold  cursor-pointer border-2 border-golden-saffron px-2 border-opacity-45 rounded-lg hover:border-opacity-100 font-m-plus'
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

WishlistCard.propTypes = {
  wishlist: PropTypes.object.isRequired, 
}

export default WishlistCard