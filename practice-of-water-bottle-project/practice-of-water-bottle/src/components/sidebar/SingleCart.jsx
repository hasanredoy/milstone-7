
import PropTypes from 'prop-types';

const SingleCart = ({ cart }) => {
  // console.log(cart);
  return (
    <div className='flex justify-between'>
      <h2 className=' text-xl font-semibold'>{cart.name}</h2>
      <p><span className=' text-red-400 text-xl'>{cart.price}</span> $</p>
    </div>
  );
};

SingleCart.propTypes = {
  cart: PropTypes.object
};

export default SingleCart;