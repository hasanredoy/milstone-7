
import './App.css'
import Count from './Counting'

function App() {
  const bg ={
    backgroundColor:'gray',
    marginTop:'20px'
  }

  function clickedByNormalFunction(){
    alert('clicked by normal function ')
  }

  const clickedByArrowFunction= ()=>{
    alert('clicked by arrow function ')
  }

  const clickedByParameterFunction = (num)=>{
    return alert(num + 6 )
  }
  return (
    <>
    <h3>Vite + React</h3>

    <Count></Count>

    {/* adding an normal click function on jsx will not take an single bracket() */}
  
    <button style={bg} onClick={clickedByNormalFunction}>click by normal function</button>
    <br />
    <button style={bg} onClick={clickedByArrowFunction}>click by arrow function</button>
    <br />
    {/* parameter soho function ke call korar somoy take arrow function dia call kora lagbe  */}

    <button style={bg} onClick={()=>{clickedByParameterFunction(5)}} >Clicked By Parameter Function </button>
    </>
  )
}

export default App
