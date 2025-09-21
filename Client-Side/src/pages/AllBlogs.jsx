import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import PostCard from "../components/PostCard";
import { Helmet } from "react-helmet-async";


const AllBlogs = () => {
  // const [posts, setposts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');

  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');

  // getting posts count
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/postCount?filter=${filter}&search=${search}`
      );

      setCount(data.count);
    };
    getCount();
  }, [filter, search]);

  // getting post data
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts', currentPage, filter, itemsPerPage, sort, search],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/all-posts?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      );
      return data;
    },
    onError: (error) => {
      console.log('Error fetching data:', error);
    },
  });

  const postsPerPage = Math.ceil(count / itemsPerPage);

  const pages = [...Array(postsPerPage).keys()].map((ell) => ell + 1);

  const handleCurrentPage = (value) => {
    setCurrentPage(value);
  };

  const handlePrevBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    if (currentPage === 1) {
      disabled;
    }
  };

  const handleNextBtn = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleResetBtn = () => {
    setFilter('');
    setSort('');
    setSearch('');
    setSearchText('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
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
        <title>ByteBlog || All Blogs</title>
      </Helmet>
      <div className='lg:pt-4 space-y-8 lg:space-y-10'>
        <SectionTitle title='All Posts' />

        {/* searching and sorting */}

        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          {/* category */}
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={filter}
              name='category'
              id='category'
              className='border text-sm lg:text-base p-2 lg:p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='HTML/CSS'>HTML/CSS</option>
              <option value='JavaScript'>JavaScript</option>
              <option value='React JS'>React JS</option>
              <option value='Node JS'>Node JS</option>
              <option value='MongoDB'>MongoDB</option>
            </select>
          </div>
          {/* search */}
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-royal-amethyst focus-within:ring-royal-amethyst'>
              <input
                className=' placeholder-gray-500 bg-white outline-none focus:placeholder-transparent text-sm lg:text-base p-2 lg:p-4 rounded-md'
                type='text'
                name='search'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                placeholder='Enter Post Title'
                aria-label='Enter Job Title'
              />

              <button className='text-sm lg:text-base p-2 lg:p-4 font-medium text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          {/* sort */}
          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1);
              }}
              value={sort}
              name='category'
              id='category'
              className='border text-sm lg:text-base p-2 lg:p-4 rounded-md'
            >
              <option value=''>Sort By Posted Time</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          {/* reset btn */}
          <button
            onClick={handleResetBtn}
            className='bg-white rounded-md text-sm lg:text-base p-2 lg:p-4 border-2 border-gray-400'
          >
            Reset
          </button>
        </div>

        {/* mapping the all posts data */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mx-5 lg:mx-3'>
          {posts?.slice(0, 6).map((post) => (
            <PostCard key={post._id} post={post} type='blog' />
          ))}
        </div>

        {/* pagination section */}
        <div className='flex justify-center mt-12'>
          {/* previous btn */}
          <button
            onClick={handlePrevBtn}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 bg-royal-amethyst
            text-light-ash
            disabled:bg-gray-200 disabled:text-gray-500 capitalize rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-golden-saffron  hover:text-midnight-indigo`}
          >
            <div className='flex items-center -mx-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 16l-4-4m0 0l4-4m-4 4h18'
                />
              </svg>

              <span className='mx-1'>previous</span>
            </div>
          </button>

          {/* dynamic btn */}
          {pages.map((btnNum) => (
            <button
              key={btnNum}
              onClick={() => handleCurrentPage(btnNum)}
              className={`px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-royal-amethyst  hover:text-white ${
                currentPage === btnNum ? 'bg-golden-saffron  text-white' : ''
              } `}
            >
              {btnNum}
            </button>
          ))}

          {/* next btn */}
          <button
            onClick={handleNextBtn}
            disabled={currentPage === pages.length}
            className='px-4 py-2 mx-1 bg-royal-amethyst text-light-ash transition-colors duration-300 transform rounded-md hover:bg-golden-saffron disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-midnight-indigo disabled:cursor-not-allowed 
          disabled:bg-gray-200
          disabled:text-gray-500'
          >
            <div className='flex items-center -mx-1'>
              <span className='mx-1'>Next</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </div>
          </button>
          {/*   */}
          <select
            onChange={(e) => {
              setItemsPerPage(e.target.value);
              setCurrentPage(1);
            }}
            value={itemsPerPage}
            className='pl-3 pr-1 ml-2 border-2 rounded-md border-golden-saffron text-royal-amethyst'
            name='itemsPerPage'
            id=''
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default AllBlogs;
