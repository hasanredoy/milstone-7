
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
//  console.log(bookmark)
  return (
    <div  className=' '>
       <h1 className=' text-2xl font-bold bg-white my-2 p-3 rounded-lg'>{bookmark}</h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark:PropTypes.array
};

export default Bookmark;