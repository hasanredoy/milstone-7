// 1. how to use template string 

const myObj = {
  name:'hossain',
  age:21
}

const arr = [20,10,32]


const myInfo =`
my name is ${myObj.name} my age ${myObj.age} my number is ${arr[3]}
`

console.log(myInfo)

// 2.how to declare an arrow function 
const myArrow = ()=>{

}
// 2.1 how to get even number by arrow function 
const even = arr => arr%2 ==0 ;

console.log(even())

// 3. how to use spread operator 
const newArray = [...arr]

// ADDING an index while copying 
const addAnIndex  = [...arr,50]
console.log(addAnIndex)

