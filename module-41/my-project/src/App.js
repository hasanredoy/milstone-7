// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Watch from './components/watch/Watch';
import { useEffect } from 'react';

function App() {
  const [watch , setWatches] = useState([])
  
  useEffect( ()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watch = [
  //     { id: 13, name: "Seiko Turtle", price: 300 },
  //     { id: 14, name: "Hamilton Khaki Field", price: 400 },
  //     { id: 15, name: "Citizen Eco-Drive", price: 250 },
  //   ];
  return (
    <div className="App">
     <h3 className='text-6xl'>React With tailwindcss</h3>
     {
       watch.map(watches => <Watch key={watches.id} watch={watches}></Watch>)
     }
    </div>
  );
}

export default App;
