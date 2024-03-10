export default function User({name, email, userName, index}){
  console.log(index)
 return(
  <div className="box">
    <h4>Name: {name}</h4>
    <h4>Email: {email}</h4> 
    <h4>User Name: {userName}</h4> 

  </div>
 ) 
}