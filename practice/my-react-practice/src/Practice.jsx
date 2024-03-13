import { useState } from "react";
import "./index.css"
import { useEffect } from "react";
export default function Addition() {
  let [count, setCount] = useState(+localStorage.getItem('set') ||0);
  function handleClick() {
    setCount(count = count + 1)
    // btn.className='hidden'
    // btn.style.display='hidden'
    if(count++){
      
      const btn = document.getElementById('btn')
      
      btn.style.backgroundColor='aqua';
      btn.style.width='110px';
      btn.style.height='110px';
      btn.style.backgroundColor='aqua';
    }
  }
  function handleClickDecrement() {
    if (count < 1) {
      return
    }
    setCount(count =0)
    const btn = document.getElementById('btn')
    btn.style.width='100px';
    btn.style.height='100px';
  
    btn.style.backgroundColor='purple';
  }
  useEffect(() => {
    localStorage.setItem('set', JSON.stringify(count))
  }, [count])
  // function changeBg(){
    
  // }

  return (
    <div className="marg">
      <h1 className="text">Add or Remove Number by clicking those button</h1>
      {/* <h3>Current Count : {count}</h3> */}
      <div>
        <button id="btn" style={{ marginRight: "10px", background:'skyblue', width:"100px",height:"100px", borderRadius:"50%",border:'none'}} onClick={handleClick} >{count}</button>
        <button onClick={handleClickDecrement }>Reset</button>
      </div>

    </div>
  )
}