// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmark , handleMarkAsRead}) => {
  const [blogs, setBlogs]=useState([])
  // console.log(blogs)
  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json()) 
    .then(data => setBlogs(data)) 
  },[])
  return (
    <div className=" w-[65%]">
      {
        blogs.map(blog =><Blog 
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}
          ></Blog>)
      }
    </div>
  );
};

export default Blogs;