// 1. json 

const employee = {
  company: 'abc',
  id: 2,
  languages: ['html', 'css', 'JS'],
  address: {
    city: 'abu dhabi',
    street: {
      'st': 3
    }
  }
}

const employeeJson = JSON.stringify(employee);
const employeeParse = JSON.parse(employeeJson)

console.log(employeeJson)
console.log(employeeParse)

// 2. fetch 
// fetch('url')
//   .then(res => res.json())
//   .then(data => console.log(data))

//   // fetch in async func 

//   const myFunc = async()=>{
//    const res = await fetch('url')
//    const data = await res.json()
//   }

  // 3.acccessing keys and values from an object 

   const keys = Object.keys(employee)
   const values = Object.values(employee)

   console.log(keys)
   console.log(values)

   
// 4. copying a array of Object

const names=[
  {name:'hossain',age:21},
  {name:'hasan',age:20},
  {name:'redoy',age:22},
  {name:'fahja',age:23},
  
  ]

  const newNames = {nawe:'Habib', age:17}

  const copyingNames = [...names,  newNames]
  console.log(copyingNames)

// 5. removing an specific element from an array based on condition 

const  removeY = names.filter(n => n.name !=='redoy')

console.log(removeY)