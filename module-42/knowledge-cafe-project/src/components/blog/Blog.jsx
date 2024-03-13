
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog , handleAddToBookmark, handleMarkAsRead}) => {
  // console.log(blog)
  return (
    <div>
      <div className=" border-2 border-cyan-200 p-5 my-2">
          <img className=" w-full" key={blog.id} src={blog.profile_img} alt="" />
          <div className=" md:flex justify-between my-2">
            <div className=" md:flex gap-2">
                <img  className=" w-10  rounded-full" src={blog.cover_img} alt="" srcset="" />
                <div>
                  <h2>{blog.author_name}</h2>
                  <p>{blog.publish}</p>
                </div>
            </div>
            <div className="flex justify-between gap-2">
              <p><span>{blog.watch_time}</span> mins read</p>
              <button onClick={()=>handleAddToBookmark(blog)} className=" mb-6"><FaRegBookmark /></button>

            </div>
          </div>
        <h1 className=" text-3xl font-bold">{blog.title}</h1>
        <button onClick={()=>handleMarkAsRead(blog.watch_time , blog.id)} className=" text-xl text-purple-800 ">Mark As Read </button>
        </div>
    </div>
  );
};

export default Blog;