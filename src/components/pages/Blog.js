import React, { useEffect, useState } from 'react'
import '../styles/blog.css';
const Blog = () => {
  

  const [blog, setBlog] = useState([]);

  const fetchData = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data)

    setBlog(data);
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  

  return (
    <div>

      {blog.map((item)=>{
        return <div key={item.id}>
          <p>{item.id}</p>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      })}
      <h1>Mai hu na</h1>
    </div>
  )
}

export default Blog