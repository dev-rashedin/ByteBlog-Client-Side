import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Button from "../components/Button";
import CommentCard from "../components/CommentCard";
import SectionTitle from "../components/SectionTitle";




const BlogDetails = () => {
  const { user } = useAuth()
  console.log(user)
  
  const { id } = useParams();
  console.log(user, id)
  
  
  
   const queryClient = useQueryClient();

  // const post = useLoaderData()

  if (!id) {
    return <div>Loading...</div>
  }

  // getting post data
 const {
   data: post = [],
   isLoading,
   isError,
   error,
 } = useQuery({
   queryKey: ['post', id],
   queryFn: async () => {
     const { data } = await axios.get(
       `${import.meta.env.VITE_API_URL}/posts/${id}`
     );
     return data;
   },
   onError: (error) => {
     console.log('Error fetching post:', error);
   },
   enabled: !!id
 });

 console.log('Post Data:', post);

 // Fetching comments data
 const {
   data: comments = [],
 } = useQuery({
   queryKey: ['comments', id],
   queryFn: async () => {
     const { data } = await axios.get(
       `${import.meta.env.VITE_API_URL}/comments/${id}`
     );
     return data;
   },
   onError: (error) => {
     console.log('Error fetching comments:', error);
   },
   enabled: !!id,
 });

  // posting comment
  const { mutateAsync } = useMutation({
    mutationFn: async (commentDetails) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/comments`,
        commentDetails
      );
      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success('Your comment is posted successfully');
        queryClient.invalidateQueries({ queryKey: ['comments']})
      }
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  const {
     _id,
     post_title,
     category,
     image,
     email,
     short_description,
     createdAt,
     long_description,
  } = post;
  
  console.log(post)
  

  
   const handleComment = async (e) => {
     e.preventDefault();
     const comment = e.target.comment.value;

     const commentDetails = {
       comment,
       blog_id: _id,
       user,
     };

     try {
       await mutateAsync(commentDetails);
       e.target.reset();
     } catch (error) {
       toast.error(error);
     }
   };
  
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


  return (
    <div className='pt-12 lg:pt-8 space-y-8 lg:space-y-10 mx-6 lg:mx-40'>
      {/* post details */}
      <div className='max-w-2xl mx-auto '>
        {/* title */}

        <div className='ml-1'>
          <p>
            <span className='italic text-lg font-semibold '>Post Title:</span>
            <span className='text-lg lg:text-xl font-bold ml-2'>
              {post_title}
            </span>
          </p>
          <p>
            <span className='italic font-semibold '>Posted By:</span>
            <span className='text-lg font-semibold ml-2 '>{email}</span>
          </p>
        </div>
        {/* image */}
        <div className='mt-5'>
          <img
            className='rounded-xl mx-auto w-full h-[300px] lg:h-[400px] mb-4 mt-4'
            src={image}
            alt=''
          />
        </div>
        {/* time and category */}
        <div className='flex items-center justify-between mt-8 mb-4'>
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
        <div className='flex justify-end mt-6'>
          {user?.email === post?.email ? (
            <Link to={`/update/${id}`}>
              <Button type='primary' label='Update Your Post' />
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* posting comment area */}
      <>
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
                disabled={!user}
                placeholder={
                  user ? 'Typing....' : 'You need to login first to comment'
                }
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
      </>

      {/* displaying all comment */}
      <div className='space-y-6 max-w-2xl mx-auto'>
        <SectionTitle title='All Comments' />

        {comments?.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
export default BlogDetails