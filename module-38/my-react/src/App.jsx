import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Countries'
import Todo from './todo'
import People from './Peoples'

function App() {
  const [count, setCount] = useState(0)
  const country = ['bangladesh', 'afganistan', 'pakistan']
  const humans =[
  {name:'hossain',age:21},
  {name:'hasan',age:22},
  {name:'redoy',age:23},
  ]

  return (
    <>
     <h1>Vite + React</h1>
      {/* <Person name='hossain'  age='21' ></Person>
      <Student name='Redoy' id='3'></Student>
      <Student></Student>
       <Todo task='learn react' isDone={false}> </Todo>
       <Todo task='learn jsx' isDone={false}> </Todo>
       <Todo task='learn jsx' isDone={true}> </Todo> */}
     {/* {
      country.map(each => <Countries name={each}></Countries>)
     } */}
     {
      humans.map(each => <People name={each.name} age={each.age}></People>)
     }
    </>
  )
}

function Person(props){
  // const age = 21;
  // const person = {name:'hossain'}
return(

  <h3>I am {props.name} with age : {props.age} </h3>
)
}

function Student ({name='', id=0 }){
  return(
    <div className='student'>
    <h2>Student name {name}</h2>
    <h3>id : {id}</h3>
    </div>
  )
}

export default App
