import PostCard from "../../components/PostCard"


const RecentPosts = ({posts}) => {
  return (
    <div>
      <h3 className='text-3xl text-center font-semibold'>Recent Posts</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4'>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
export default RecentPosts