const getLocalStorage = ()=>{
  const getLS = localStorage.getItem('cart')
  if(getLS){
    return JSON.parse(getLS)
  }
  return [];
}
const saveToLocalStorage = cart =>{
   const saveLs = JSON.stringify(cart)
   localStorage.setItem('cart', saveLs)
}

const addToLS = id =>{
  const cart = getLocalStorage();
  cart.push(id);
  saveToLocalStorage(cart);
}

const removeFromLS = id =>{
  const cart= localStorage.getItem('cart')
  const currentCart = JSON.parse(cart)
  const remainingCart = currentCart.filter(idx => idx !== id)
  // const remainingCart = localStorage.removeItem(id)
  // currentCart.find(idx => 
  //   {if(idx === id){
    
  // }} )
  const jsonStr = JSON.stringify(remainingCart)
  localStorage.setItem('cart', jsonStr)
  // addToLS(remainingCart)
}
export{addToLS, getLocalStorage, removeFromLS}
// removeFromLS()