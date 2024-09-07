import SectionTitle from '../components/SectionTitle';
import useAuth from '../hooks/useAuth';
import Button from '../components/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const UpdateBlog = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();

  const queryClient = useQueryClient();

  // getting post data
  const {
    data: post = [],
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

  // updating post
  const { mutateAsync } = useMutation({
    mutationFn: async (updatedPostData) => {
      const { data } = await axiosSecure.patch(`/posts/${id}`, updatedPostData);
      return data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount > 0) {
        toast.success('Your post is updated successfully');
        queryClient.invalidateQueries({ queryKey: ['post'] });
        navigate(`/posts/${id}`);
      }
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  const { post_title, category, image, short_description, long_description } =
    post;

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const post_title = form.post_title.value;
    const category = form.category.value;
    const image = form.image.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;

    const updatedPostData = {
      post_title,
      category,
      image,
      short_description,
      long_description,
    };

    try {
      await mutateAsync(updatedPostData);
      form.reset();
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
    <>
      <Helmet>
        <title>ByteBlog || Update</title>
      </Helmet>
      <div className='px-5 lg:px-40 pt-8 lg:pt-4 space-y-8 pb-8'>
        <SectionTitle title='Update Your Blog' />
        <section className='p-6 mx-auto bg-white bg-opacity-0 rounded-md shadow-2xl border-2 border-royal-amethyst border-opacity-75 border-t-4 border-r-4 border-dotted'>
          <form onSubmit={handleUpdateForm}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='  ' htmlFor='post_title'>
                  Title
                </label>
                <input
                  id='post_title'
                  name='post_title'
                  type='text'
                  required
                  defaultValue={post_title}
                  className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst '
                />
              </div>

              <div>
                <label className='  ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  required
                  readOnly={user}
                  defaultValue={user && user.email}
                  className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst '
                />
              </div>
              {/* category */}
              <div className='flex flex-col gap-2 '>
                <label className='  ' htmlFor='category'>
                  Category
                </label>
                <select
                  name='category'
                  id='category'
                  defaultValue={category}
                  className='border p-2 border-gray-300 rounded-md'
                >
                  <option value='React JS'>React JS</option>
                  <option value='Node JS'>Node JS</option>
                  <option value='JavaScript'>JavaScript</option>
                  <option value='MongoDB'>MongoDB</option>

                  <option value='HTML/CSS'>HTML/CSS</option>
                </select>
              </div>
              {/* image url */}
              <div>
                <label className='  ' htmlFor='image'>
                  Image URL
                </label>
                <input
                  id='image'
                  name='image'
                  type='text'
                  defaultValue={image}
                  className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst'
                />
              </div>
            </div>
            {/* short description */}
            <div className='flex flex-col gap-2 mt-4'>
              <label htmlFor='short_description'>Short Description</label>
              <textarea
                required
                className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst'
                name='short_description'
                id='short_description'
                defaultValue={short_description}
              ></textarea>
            </div>
            {/* long description */}
            <div className='flex flex-col gap-2 mt-4'>
              <label htmlFor='long_description'>Long Description</label>
              <textarea
                required
                className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst'
                name='long_description'
                id='long_description'
                rows='5'
                defaultValue={long_description}
              ></textarea>
            </div>
            {/* update btn */}
            <div className='flex justify-end mt-8'>
              <Button type='secondary' label='Update the blog' />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
UpdateBlog.propTypes = {}
export default UpdateBlog