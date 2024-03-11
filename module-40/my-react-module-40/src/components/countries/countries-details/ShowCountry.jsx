const ShowCountry = 
({item , handleVisitedCountries, handleFlags}) => {
  return (
    <div>
      <p>country name : {item.name.common}</p>
    </div>
  );
};

export default ShowCountry;