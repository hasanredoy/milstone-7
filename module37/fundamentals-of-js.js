// 1. how to declare a variable using const and let

// 2. how to use comparison operator
// >,<, =, ==, ===,+,-,*,/,!==, || , && 

// if(){

// }
// else if( ){

// }

// else{

// }

// 3. how declare an Array 
const arr = [20,10,32]
// how to check length of array 
arr.length
// how to check index of an Array 
arr[0]
// how to and an index in array 
arr[0]=30;

// 4.loops 
// while loop 
// 4.1 for loop
for (let i= 0; i<arr.length; i++){
  const num = arr[i]
  console.log(num)
}

// 5. function 

function name(a,b) {
  return a+b
}

console.log(name(5,5))

// 6. how declare an Object 
const myObj = {
  name:'hossain',
  age:21
}
const myAge = 'age'
// how to access values of Object
console.log(myObj.name)
console.log(myObj['name'])
console.log(myObj[myAge])