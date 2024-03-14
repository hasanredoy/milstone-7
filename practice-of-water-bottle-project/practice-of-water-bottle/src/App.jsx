
import { useState } from 'react'
import './App.css'
import Bottles from './components/FetchBottle/Bottles'
import Cart from './components/sidebar/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  
   const [cart , setCart]=useState([])
   const [stock , setStock]=useState([])
   const handleStock=(bottle)=>{
     setStock(...stock , bottle)
    }
    console.log(stock)
  // add to cart btn 
  const handleCartBtn =(bottle)=>{
    // console.log(bottle);
    const setCartt = cart.find(cartX => cartX.id == bottle.id)
    const newCart = [...cart , bottle] 
     if(!setCartt){
      toast.success("Product Added")
       setCart(newCart)
     }
     else toast.error("Product Already Added")
    //  stockX = bottle.stock
    // console.log(stockX);
    // setStock(stock-1)
  }
// console.log(stockX);

  return (
    <div className='  p-5 rounded-lg'>
      <h2 className=' text-5xl  my-5 font-bold text-cyan-900 '>Memorable Water Bottle</h2>
      <div className='md:flex gap-x-5'>
        <Bottles handleCartBtn={handleCartBtn}
        handleStock={handleStock}></Bottles>
        <Cart cart={cart}></Cart>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
