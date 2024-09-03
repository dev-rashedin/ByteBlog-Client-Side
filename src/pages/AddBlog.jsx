import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import useAuth from '../hooks/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddBlog = () => {
  const { user } = useAuth();
   const navigate = useNavigate();
  const queryClient = useQueryClient();

  
  
  const { mutateAsync } = useMutation({
    mutationFn: async (postData) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        postData
      );
      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success('Your job is posted successfully');
        navigate('/')
      }
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const post_title = form.post_title.value;
    const email = form.email.value;
    const category = form.category.value;
    const image = form.image.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;

    const postData = {
      post_title,
      email,
      category,
      image,
      short_description,
      long_description,
      createdAt: new Date(),
    };

  try {
    await mutateAsync(postData);
    form.reset()
  } catch (error) {
    toast.error(error)
  }
  };

  return (
    <div className='px-5 lg:px-40'>
      <div className='border-2 border-golden-saffron w-1/3 mx-auto border-dashed my-4 p-1 rounded-lg'>
        <h2 className='text-xl font-semibold font-m-plus uppercase text-center '>
          Write a Blog
        </h2>
      </div>
      <section className='p-6 mx-auto bg-white bg-opacity-0 rounded-md shadow-2xl '>
        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='  ' htmlFor='post_title'>
                Title
              </label>
              <input
                id='post_title'
                name='post_title'
                type='text'
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
                className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst'
              />
            </div>
          </div>
          {/* short description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor='short_description'>Short Description</label>
            <textarea
              className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst'
              name='short_description'
              id='short_description'
            ></textarea>
          </div>
          {/* long description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor='long_description'>Long Description</label>
            <textarea
              className='block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md  focus:border-royal-amethyst'
              name='long_description'
              id='long_description'
              rows='5'
            ></textarea>
          </div>
          {/* post btn */}
          <div className='flex justify-end mt-8'>
            <Button type='secondary' label='Post the blog' />
          </div>
        </form>
      </section>
    </div>
  );
};
export default AddBlog;
