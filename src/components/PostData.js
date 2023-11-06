import React, { useEffect, useState } from "react";
import axios from "axios";

function PostData() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="loading">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {post.map((list) => {
            return (
              <li key={list._id}>
                {list._id} : {list.name}
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PostData;
