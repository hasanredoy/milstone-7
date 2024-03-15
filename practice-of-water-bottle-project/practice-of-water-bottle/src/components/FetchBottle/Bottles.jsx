import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Bottle from '../ShowBottle/Bottle';

Bottles.propTypes = {
  bottle:PropTypes.object,
  toggle:PropTypes.object,
  bottles:PropTypes.func,
  handleCartBtn:PropTypes.func,
  handleRemove:PropTypes.func,
};

function Bottles({handleCartBtn, handleRemove,toggle}) {
  const[bottles, setBottles]=useState([])
// console.log(bottle);
  useEffect(()=>{
    fetch('bottle.json')
    .then(res=> res.json())
    .then(data => setBottles(data))
  },[])
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 w-[70%] gap-4'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} 
          handleCartBtn={handleCartBtn}
          handleRemove={handleRemove}
          bottle={bottle}
          toggle={toggle}
          ></Bottle>)
      }
    </div>
  );
}

export default Bottles;