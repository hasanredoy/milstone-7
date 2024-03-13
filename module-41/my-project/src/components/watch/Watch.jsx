
const Watch = ({watch}) => {
  return (
    <div>
      <h2 className="text-2xl mt-5">Watch: {watch.name}</h2>
      <p>Price: {watch.price}</p>
    </div>
  );
};

export default Watch;