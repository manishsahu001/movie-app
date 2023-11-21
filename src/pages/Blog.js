import React from 'react'
import './styles/blog.css'
import blogData from '../dummyBlog';
import { useSelector } from 'react-redux';
const Blog = () => {


  const theme = useSelector(state => state.ui.dark)
  return (
    <>

<div className="content-container-ab" id={theme ? "" : "content-container-ab-light"}>
        
      {blogData.map((blog)=>{
          return <div className="ab-container blog-box-h" key={blog.id}>
          {/* <span className="material-symbols-outlined">high_quality</span> */}
            <div className="ab-content-descripton">
              <h1>{blog.heading}</h1>
              <p>
                {blog.description}
              </p>
            </div>
          </div>
      })}
      </div>
    </>
  )
}

export default Blog