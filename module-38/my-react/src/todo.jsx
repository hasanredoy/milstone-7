export default function Todo({ task, isDone }) {

  //   // option 1

  //   if(isDone){
  //     return(
  //     <div>
  //       <h3>TO DOOO: {task}</h3>
  //     </div>
  //   )
  // }
  // return(
  // <div>
  //   <h3>Explore: {task}</h3>
  // </div>
  // )

  // conditional rendering option 2 ternary operator

  // return(
  // <div>
  //   <h3> {isDone?'to do:':'Explore:'} {task}</h3>
  // </div>
  // )


  // conditional rendering option 3 &&

  //   return(
  //     <div>
  //   <h3>{task} {isDone && ': done'} </h3>
  // </div>
  // )

  // conditional rendering option 4 ||

  // return (
  //   <div>
  //     <h3>{task} {isDone || ':do it'} </h3>
  //   </div>
  // )

  //   // option 5 by variable

  //  let print;
  //   if(isDone){
  //    print=(
  //     <div>
  //       <h3>TO DOOO: {task}</h3>
  //     </div>
  //   )
  // }
  // else{print=(
  // <div>
  //   <h3>Explore: {task}</h3>
  // </div>
  // )
  // }
  // return print

  // option 6 by else if
  
  if(isDone){
    return(
     <div>
       <h3>TO DOOO: {task}</h3>
     </div>
   )
 }
 else{
  return(
 <div>
   <h3>Explore: {task}</h3>
 </div>
 )
 }
}