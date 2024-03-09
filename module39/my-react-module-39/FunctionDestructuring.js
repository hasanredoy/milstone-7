// // destructuring an function 
// const numbers = (num1,num2) =>{
//    return [num1, num2]
// }

// destructuring an function and function er modde function ke return kora 
const numbers = (num1) =>{
  function innerFunc (value){
    num1 = value;
  }
   return [num1, innerFunc]
}

const [num1 , num2] = numbers(20)
// console.log(num1,num2)
console.log(numbers(5))