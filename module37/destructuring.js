// 1. destructuring 

const [first, second ] =[56, 80]

function returnAnArray (num1, num2 ){
  const newArray = [num1, num2]
  return newArray
}

console.log(returnAnArray(34,90))

// 2. destructuring an object 

const myInfo = {
  name:'hossain',
  surname:'redoy',
  age:21
}

const {name, surname , age}= myInfo;
console.log(name)

// destructuring an nested object 

const employee ={
  company:'abc',
  id:2,
  languages:['html','css', 'JS'],
  address:{
    city:'abu dhabi',
    street:{
      'st': 3
    }
  }
}

// destructuring array in obj

const [fir, sec, third ] = employee.languages;
console.log(fir,sec,third)

// destructuring obj in obj 

const {city} = employee.address;
console.log(city)

// destructuring obj in obj in obj

const {st} = employee.address.street;
console.log(st)