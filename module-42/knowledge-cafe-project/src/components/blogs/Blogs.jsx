// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs]=useState([])
  console.log(blogs)
  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json()) 
    .then(data => setBlogs(data)) 
  },[])
  return (
    <div className=" w-[60%]">
      {
        blogs.map(blog =><Blog blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;