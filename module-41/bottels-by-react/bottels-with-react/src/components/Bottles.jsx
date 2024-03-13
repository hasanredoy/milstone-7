import { useEffect, useState } from "react";
import SingleBottle from "./singleBottle/SingleBottle";
import "./Bottles.css"
import { addToLS, getLocalStorage, removeFromLS } from "../localStorage";
import Cart from "./single-cart/Cart";

const Bottles = () => {
  // use state for fetching data from json 
  const [bottles , setBottles] =useState([])
  // use state for cart 
  const [cart , setCart] = useState([])
  // console.log(cart)
  
  const handleBottle = bottle=>{
    const getButton = [...cart, bottle]
    setCart(getButton)
    addToLS(bottle.id)
    
  }
  const handleRemoveBottle = id =>{
    const remainingCart = cart.filter(bottle => bottle.id !== id)
    setCart(remainingCart)
    
    removeFromLS(id)
  }
  console.log(cart)
  // use effect of fetch
  useEffect(()=>{
    fetch('bottle.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[])
  // use  effect of cart 
  useEffect(()=>{
    // console.log(bottles.length)
    if(bottles.length>0){
    const getStoredCartFunc = getLocalStorage()
    // console.log(getStoredCartFunc,bottles)
    const savedCart = []
    for(const id of getStoredCartFunc){
      // console.log(id)
      const bottle = bottles.find(bottle=> bottle.id === id)
      if(bottle){
        savedCart.push(bottle)
      }
      // console.log(savedCart)
      setCart(savedCart)
    }
  }
  },[bottles])

  return (
    <div>
      <h1>Bottles Available: {bottles.length}</h1>
      <Cart cart={cart} 
      handleRemoveBottle={handleRemoveBottle}></Cart>
     <div className="griding">
     {
        bottles.map((bottle)=><SingleBottle 
        key={bottle.id} 
        bottle={bottle}
        handleBottle={handleBottle}
        
        ></SingleBottle>)
      }
     </div>
    </div>
  );
};

export default Bottles;