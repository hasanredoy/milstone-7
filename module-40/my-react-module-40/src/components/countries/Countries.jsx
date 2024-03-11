import { useEffect, useState } from "react";
import ShowData from "./ShowData";
import "./Countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [visitedCountries, setVisitedCountries] = useState([])
  const [initialFlags , setFlags] = useState([])

  const handleVisitedCountries = country =>{
    
    // note : use state use korar somoy je array pawa jay oi array er modde push ba pop kaj kore na tai niceher system onujai array ke copy kore tarpore new value set korte hoy 

    const newVIsitedCountries= [...visitedCountries, country]
    setVisitedCountries(newVIsitedCountries)
    // const ul = document.getElementById('ul')
    // const li = document.createElement('li')
    // li.innerHTML=country
    // ul.appendChild(li)
  }

  const handleFlags =(flags)=>{
    // console.log(flags)
    const setFlag= [...initialFlags, flags]
    setFlags(setFlag)
  }
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <div className="">
        <h4>Visited Countries {visitedCountries.length}</h4>
        <ul id="ul">
            {
              visitedCountries.map(forCountry => <li >{forCountry.name.common}</li>)
            }
        </ul>
      </div>
      <div>
        {
          initialFlags.map(Flag =><img
            style={{width:'100PX', marginLeft:"10px"}}
            src={Flag}></img>)
        }
      </div>
      <div className="grid">
        {
          countries.map(country => <ShowData item={country} 
            key={country.cca3} 
            handleVisitedCountries={handleVisitedCountries}
            handleFlags={handleFlags}
            ></ShowData>
          )
        }
      </div>
    </div>

  );
};

export default Countries;