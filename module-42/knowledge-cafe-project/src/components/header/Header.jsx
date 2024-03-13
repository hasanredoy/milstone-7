import profile from "../../assets/my image.jpg"

const Header = () => {
  return (
    <div className="flex justify-between m-5 bg-slate-300">
      <h1 className='text-4xl font-black'>hello world</h1>
      <img src={profile} width={'50px'} alt="" srcset="" />
    </div>
  );
};

export default Header;