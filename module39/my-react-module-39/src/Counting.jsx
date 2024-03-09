import { useState } from "react"

export default function Count(){
  const [count, setCount] = useState(0)

  const handleClickAdd =()=>{
    const newCount = count +1 
    setCount(newCount)
  }
  const handleClickRemove =()=>{
    const newCount = count -1 
    setCount(newCount)
  }
  return(
    <div style={{border:'2px solid gray'}}>
    <h2>count: {count}</h2>
    <button style={{backgroundColor:"gray"}} onClick={handleClickAdd}>Add</button>
    <button style={{backgroundColor:"gray"}} onClick={handleClickRemove}>Remove</button>
    
    </div>
  )
}