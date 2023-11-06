import React, { useEffect, useState } from 'react';
import '../scss/Main.scss';

function Main(){
  const [post, setPost] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setPost(data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return(
    <main>
      <div className="inner">
        <ul>
          {post.map((el)=>{
            return <li key={el.id}>
              <span className='email'>{el.email}</span>
              <span className='name'>{el.name}</span>
              </li>
          })}
        </ul>
      </div>
    </main>
  )
}

export default Main;