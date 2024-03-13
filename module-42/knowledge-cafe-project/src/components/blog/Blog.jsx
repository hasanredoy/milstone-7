

const Blog = ({blog}) => {
  console.log(blog)
  return (
    <div>
      <div className=" border-2 border-cyan-200 p-5 my-2">
          <img key={blog.id} src={blog.profile_img} alt="" />
          <div className=" md:flex justify-between my-2">
            <div className=" md:flex gap-2">
                <img  className=" w-10  rounded-full" src={blog.cover_img} alt="" srcset="" />
                <div>
                  <h2>{blog.author_name}</h2>
                  <p>{blog.publish}</p>
                </div>
            </div>
            <div>
              <p><span>{blog.watch_time}</span> mins read</p>

            </div>
          </div>
        <h1 className=" text-3xl font-bold">{blog.title}</h1>
        </div>
    </div>
  );
};

export default Blog;