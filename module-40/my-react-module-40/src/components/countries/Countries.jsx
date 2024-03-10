import { useEffect, useState } from "react";
import ShowData from "./ShowData";

const Countries = () => {
  const [countries, setCountries] =useState([])
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      {
        countries.map(country =><ShowData item={country} key={country.cca3}></ShowData>
       )
      }
    </div>
  );
};

export default Countries;