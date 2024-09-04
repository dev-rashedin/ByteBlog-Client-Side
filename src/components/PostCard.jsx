import { Link } from "react-router-dom";


const PostCard = ({ post }) => {
  
  const {
    _id,
    post_title,
    email,
    category,
    image,
    short_description,
    createdAt
  } = post;

  const handleWishlist = () => {

  }

  return (
    <div className='max-w-2xl px-8 py-4 rounded-lg shadow-xl border-2 border-royal-amethyst border-opacity-75 border-t-4 border-r-4 border-dotted hover:scale-[1.01] hover:transition-all hover:border-dashed hover:duration-300 rounded-se-3xl rounded-es-3xl'>
      {/* time and category */}
      <div className='flex items-center justify-between'>
        <span className='text-sm font-light opacity-95'>
          {new Date(createdAt).toLocaleString()}
        </span>
        <p
          className={`px-3 py-1 text-sm font-bold ${
            post.category === 'HTML/CSS' &&
            'text-blue-600 bg-blue-200 bg-opacity-75'
          } ${
            post.category === 'JavaScript' &&
            'text-emerald-600 bg-emerald-200 bg-opacity-75'
          } ${
            post.category === 'Node JS' &&
            'text-pink-600 bg-pink-200 bg-opacity-75'
          } ${
            post.category === 'MongoDB' &&
            'text-yellow-600 bg-yellow-200 bg-opacity-75'
          } ${
            post.category === 'Node JS' &&
            'text-purple-600 bg-purple-200 bg-opacity-75'
          } rounded-full px-2 font-m-plus`}
          tabindex='0'
          role='button'
        >
          {category}
        </p>
      </div>

      <div className='mt-2 lg:min-h-32'>
        <p className='text-lg font-bold '>{post_title}</p>
        <p className='mt-2'>{short_description}</p>
      </div>

      {/* read more & wishlist btn */}
      <div className='flex items-center justify-between mt-4'>
        <Link
          to={`posts/${_id}`}
          className='text-royal-amethyst font-semibold hover:underline '
        >
          Read more
        </Link>

        <div className='flex items-center'>
          <button
            onClick={handleWishlist}
            className='font-semibold  cursor-pointer border-2 border-golden-saffron px-2 border-opacity-45 rounded-lg'
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
export default PostCard