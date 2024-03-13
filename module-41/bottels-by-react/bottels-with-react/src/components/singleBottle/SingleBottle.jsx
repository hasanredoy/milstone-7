
import ".//singleBottle.css"
const SingleBottle = ({bottle, handleBottle}) => {
  return (
    <div style={{border:'2px solid yellow', padding:"20px", margin:"20px", borderRadius:"10px"}}>
      <h3>Name: {bottle.name}</h3>
      <img style={{width:"200px"}} src={bottle.img} alt="" />
      <h4>Price : {bottle.price} tk</h4>
      <button className="button" onClick={()=>handleBottle(bottle)}>Purchase</button>
      
    </div>
   
  );
};

export default SingleBottle;