export default function  People ({name, age}){

  // adding css by variables 
  const addCustomCss={
    margin:'20px',
    padding:'20px',
    border:'2px solid black',
    borderRadius:'5px'
  }
  return(
    <div style={addCustomCss}>
      <h3>name: {name }</h3>
      <h3>age: {age}</h3>
    </div>
  )
}