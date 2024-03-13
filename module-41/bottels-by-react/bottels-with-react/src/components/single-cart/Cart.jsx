import PropTypes from 'prop-types';
const Cart = ({cart, handleRemoveBottle}) => {
  // console.log(cart)
  return (
    <div>
       <h2>Cart: {cart.length}</h2>
       {/* <h2>Name: {cart.name}</h2> */}
       <div>
        {
          cart.map(bottle => <div>
            <img key={bottle.id} style={{marginRight:'10px',border:"2px solid yellowGreen"}} src={bottle.img} width={'100px'}></img>
            {/* {console.log(bottle.id) } */}
            <button className="button" 
            onClick={()=>handleRemoveBottle(bottle.id)}>Remove</button>

          </div>)
        }
       </div>
    </div>
  );
};
Cart.propTypes={
  cart: PropTypes.object.isRequired
}

export default Cart;