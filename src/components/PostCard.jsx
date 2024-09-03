import { Link } from "react-router-dom";


const PostCard = ({ post }) => {
  
  const {
    _id,
    post_title,
    email,
    category,
    image,
    short_description,
    long_description,
  } = post;

  return (
    <Link
      to={`post/${_id}`}
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all mt-8 space-y-4 lg:space-y-8'
    >
      <div className='flex items-center justify-between'>
        <span
          className={`px-3 py-1 text-[10px]  rounded-full font-semibold ${
            category === 'Web Development' &&
            'text-blue-600 uppercase bg-blue-100'
          } ${
            category === 'UI/UX Design' || category === 'Graphics Design'
              ? 'text-red-600 uppercase bg-red-100'
              : ''
          } ${
            category === 'Digital Marketing' &&
            'text-green-600 uppercase bg-green-100'
          }`}
        >
          {category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          {post_title}
        </h1>

        <p title={short_description} className='mt-2 text-sm text-gray-600 '>
          {short_description.slice(0, 70)}....
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
         
        </p>
       
      </div>
    </Link>
  );
}
export default PostCard