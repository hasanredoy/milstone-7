import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks, markAsRead}) => {
  return (
  <div className="w-[32%] bg-gray-200 mx-2 rounded-lg p-2">
    <div>
      <h1 className="text-2xl   text-purple-950 ">Reading time: {markAsRead} mins</h1>
    </div>
     <div >
      <h1 className=" text-xl font-semibold text-center my-5 ">Total Bookmarked : {bookmarks.length}</h1>
      {
        bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark.title}></Bookmark>)
      }
    </div>
  </div> 
  );
};

export default Bookmarks;