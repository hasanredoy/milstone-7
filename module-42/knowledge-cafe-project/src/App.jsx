
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'

function App() {
  
  const [bookmarks , setBookmarks] =useState([])
  const handleAddToBookmark = blog =>{
    // console.log(blog)
    const newBookmark = [...bookmarks , blog]
    setBookmarks(newBookmark)
  } 


  const [markAsRead , setMarkAsRead] =useState(0)

  const handleMarkAsRead = (mark ,id) =>{
    // console.log(mark+6)
    setMarkAsRead(markAsRead + mark)
    const newBookmark = bookmarks.filter(idx => idx.id !== id)
    // setMarkAsRead(newBookmark)
    setBookmarks(newBookmark)
    console.log(id)
  } 
  return (
    <>
     <Header></Header>
     <div className='md:flex justify-between container mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark}  handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
     </div>
    </>
  )
}

export default App
