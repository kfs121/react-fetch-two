import React, { useEffect, useState } from 'react'

function Test(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/users")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setUsers(data);
      // setLoading(false);
    })
    .catch(err=>{
      // setLoading(false);
      console.log(err);
    })
  },[])

  console.log(users);

  return(
    <>
      <ul>
        {
          users.map((el)=>{
            return <li key={el.id}>{el.name}</li>
          })
        }
      </ul>
    </>
  )
}
export default Test;