import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Button from "../components/Button";



const BlogDetails = () => {
  const {user} = useAuth()
  const { id } = useParams();
   const queryClient = useQueryClient();

  // const post = useLoaderData()

  // getting post data
  const {
    data: post = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/${id}`
      );
      return data;
    },
    onError: (error) => {
      console.log('Error fetching data:', error);
    },
    enabled: !!id,
  });

  // posting comment
  const { mutateAsync } = useMutation({
    mutationFn: async (comment) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        comment
      );
      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success('Your comment is posted successfully');
        queryClient.invalidateQueries({ queryKey: ['post']})
      }
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

   const {
     post_title,
     category,
     image,
     email,
     short_description,
     createdAt,
     long_description,
   } = post;

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

  const handleComment = async(e) => {
    e.preventDefault()
    const comment = e.target.comment.value;
    
    try {
      await mutateAsync(comment);
      e.target.reset();
    } catch (error) {
      toast.error(error);
    }
    
  }



  return (
    <div className='pt-12 lg:pt-8 space-y-8 lg:space-y-10 mx-6 lg:mx-40'>
      {/* post details */}
      <div className='max-w-2xl mx-auto '>
        {/* title */}

        <div className='ml-1'>
          <p>
            <span className='italic text-lg font-semibold '>Post Title:</span>
            <span className='text-lg lg:text-xl font-bold ml-2 font-m-plus'>
              {post_title}
            </span>
          </p>
          <p>
            <span className='italic font-semibold '>Posted By:</span>
            <span className='text-lg font-semibold ml-2 '>{email}</span>
          </p>
        </div>
        {/* image */}
        <div className='mt-2'>
          <img
            className='rounded-xl mx-auto w-full h-[300px] lg:h-[400px] mb-4 mt-4'
            src={image}
            alt=''
          />
        </div>
        {/* time and category */}
        <div className='flex items-center justify-between mt-6 mb-4'>
          <p className='border-2 border-royal-amethyst px-2 py-1 rounded-md'>
            <span className='italic mr-2'>Published At: </span>
            <span className='font-semibold'>
              {new Date(createdAt).toLocaleString()}
            </span>
          </p>
          <p className='border-2 border-royal-amethyst px-2 py-1 rounded-md'>
            <span className='italic'>Category: </span>
            <span
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
                post.category === 'React JS' &&
                'text-purple-600 bg-purple-200 bg-opacity-75'
              } rounded-full px-2 font-m-plus ml-3`}
            >
              {category}
            </span>
          </p>
        </div>

        <div>
          <p className='mt-2'>
            <span className='italic mr-2 font-semibold'>
              Short Description:{' '}
            </span>
            {short_description}
          </p>
          <p className='mt-2'>
            <span className='italic mr-2 font-semibold'>
              Long Description:{' '}
            </span>
            {long_description}
          </p>
        </div>
        <div className='flex justify-end mt-2'>
          {user?.email === post?.email ? (
            <Link to='/update'>
              <Button type='primary' label='Update Your Post' />
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* comment area */}  
      {user?.email === post?.email ? (
        <p className='text-xl text-center border-2 border-golden-saffron mx-auto py-2 border-dashed'>
          Blog owner cannot comment on his own post
        </p>
      ) : (
        <div className='max-w-2xl mx-auto '>
          <h3 className='text-xl font-semibold  mb-2 border-b-2 text-center border-golden-saffron w-1/2 lg:w-[40%] mx-auto rounded-xl font-m-plus'>
            Post your comment here
          </h3>
          <form onSubmit={handleComment} className='flex flex-col items-end'>
            <textarea
              required
              className='block 
           bg-transparent w-full px-4 py-2 mt-2 border border-gray-600 rounded-md  focus:border-royal-amethyst'
              name='comment'
              id='comment'
            ></textarea>
            <input
              className='btn sm:btn-sm md:btn-md bg-royal-amethyst hover:bg-golden-saffron text-white w-1/3 mt-4'
              type='submit'
              value='Comment'
            />
          </form>
        </div>
      )}
    </div>
  );
}
export default BlogDetails