// 1.array.map

const mapUse=[
{name:'hossain',age:21},
{name:'hossain',age:20},
{name:'hossain',age:22},
{name:'hossain',age:23},

]
const x=mapUse.map(ag=> ag.age)
console.log(x)
// 2.for each

mapUse.forEach(n=>{
  console.log(n.name)
})

// 3.filter

const under23 = mapUse.filter(a=>a.age < 22)

console.log(under23)

// 4. find

const name = mapUse.find(name => name.name.includes('h'))
console.log(name)