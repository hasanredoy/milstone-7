
import { useState } from 'react'
import './App.css'
import Bottles from './components/FetchBottle/Bottles'
import Cart from './components/sidebar/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLS} from './components/js/LocalStorage';



function App() {

  
   const [cart , setCart]=useState([])
  const handleRemove = (cartt)=>{
    console.log(cartt)
    const newCart = cart.filter(cartX => cartX.id !== cartt);
    // const cartt = [...cart, newCart]
    setCart(newCart)
  }
   // add to cart btn 
  const handleCartBtn =(bottle)=>{
    // console.log(bottle);
    const setCartt = cart.find(cartX => cartX.id == bottle.id)
    const newCart = [...cart , bottle] 
    if(cart.length === 4)return
     if(!setCartt){
      toast.success("Product Added")
       setCart(newCart)
       const bottleId = bottle.id
       addToLS(bottleId)
     }
     else toast.error("Product Already Added")
  }

  return (
    <div className='  p-5 rounded-lg'>
      <h2 className=' text-5xl  my-5 font-bold text-cyan-900 '>Memorable Water Bottle</h2>
      <div className='md:flex gap-x-5'>
        <Bottles 
        handleCartBtn={handleCartBtn}
        
        ></Bottles>
        <Cart cart={cart}
        handleRemove={handleRemove}></Cart>
        
      </div>
      <ToastContainer></ToastContainer>

      
    </div>
  )
}

export default App
