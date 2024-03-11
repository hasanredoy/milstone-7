import ShowCountry from "./ShowCountry";

const CountryDetail = (props) => {
  // const {item , handleVisitedCountries, handleFlags} = props
  return (
    <div>
      <h4>Country Details</h4>
       
        {/* <ShowCountry
        item={item}
        handleVisitedCountries={handleVisitedCountries}
        handleFlags={handleFlags}
        ></ShowCountry> */}
        <ShowCountry
        {...props}
        ></ShowCountry>
    </div>
  );
};

export default CountryDetail;