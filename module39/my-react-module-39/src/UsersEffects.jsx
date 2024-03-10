import { useEffect, useState } from "react"
import "./Users.css"
import User from "./SingleUser"

export default function Users(){
  const [user, setUser] = useState([])

  // using useEffect
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  return(
    <div className="box">
       <h3>Users: {user.length} </h3>
       {
        user.map((userS,index) => <User name={userS.name} email={userS.email}userName={userS.username} index={index}></User>)
       }
    </div>
  )
}