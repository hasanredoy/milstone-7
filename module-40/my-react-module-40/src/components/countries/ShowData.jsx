import "./Countries.css"
 const ShowData = ({item , key}) => {
  // console.log(item)
  let replace = false;
  if(item.area===20770){
   const getH4 = document.getElementById('h4');
  //  getH4.classList.add('hidden')
  // getH4.setAttribute() 
  replace=true
  
  }
   if(replace){
    return
   }
  return (
    <div className="country {}">
      <h3>Name: {replace ?' ':item.name.official}</h3>
      <h3>Name: {}</h3>
      <h4 id="h4">Area: { replace ?' ':item.area} </h4>
      <img src={replace ?' ':item.flags.png} alt="" srcset="" />
      
    </div>
  );
};

export default ShowData;