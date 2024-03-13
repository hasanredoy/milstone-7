import { useState } from "react";
import "./ShowData.css"
import CountryDetail from "./countries-details/CountryDetail";
let visitBtn= document.getElementById('visit-button')
// visitBtn.className
// console.log(visitBtn)
 const ShowData = ({item , handleVisitedCountries, handleFlags}) => {
  
  let replace = false;
  if(item.area===20770){
  replace=true
  }
   if(replace){
    return
   }

   const [visited , setVisited] = useState(false)
   const handleVisit  = ()=>{
    setVisited(!visited)
   }
  return (
    // adding conditional css 
    <div className={`country ${visited ? 'bg':' '}`}>
      <h3 style={{color:visited?'purple':"tomato"}}>{replace ?' ':item.name.common}</h3>
      <img src={replace ?' ':item.flags.png} alt="" srcset="" />
      <p>Official name: {item.name.official}</p>
      {/* <p>Capital: {item.capital}</p */}
      <p>Capital: {item.capital}</p>
      <p>Total Population: {item.population}</p>
      <h4 id="h4">Area: { replace ?' ':item.area} </h4>
      <button id="visit-button" onClick={function(event){handleVisitedCountries(item)}} oncl>Mark Visited</button>
      {/* <button id="visit-button" onClick={(()=>handleVisitedCountries(item)) ( ()=>getId(visitBtn))} oncl>Mark Visited</button> */}
      <br />
      <button onClick={(()=>handleFlags(item.flags.png))}>Add Flag</button>
      <br />
      <button onClick={handleVisit}>{visited?"Visited":'Going'}</button>
      {/* { visited?'visited':'i want to visit'} */}
      <hr />
      <CountryDetail
      item ={item}
      handleVisitedCountries={handleVisitedCountries}
      handleFlags={handleFlags}
      ></CountryDetail>
    </div>
  );
};

export default ShowData;