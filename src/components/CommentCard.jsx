import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle';


const CommentCard = ({ comment }) => { 
  return (
    <div>
      <div className='flex items-center mb-2'>
        <img
          referrerPolicy='no-referrer'
          className='w-8 rounded-full' src={comment.user.photoURL} alt="Commenter's picture" />
        <p className='text-lg font-semibold  ml-2'>
          {comment.user.displayName}
        </p>
      </div>

      <div className='ml-10'>
        <span className='italic text-lg font-semibold '>Comment:</span>
        <span className=' ml-2'>{comment.comment}</span>
      </div>
      <div className='border-b-2 border-royal-amethyst pt-2 ml-10 border-opacity-30'></div>
    </div>
  );
}
CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
}
export default CommentCard