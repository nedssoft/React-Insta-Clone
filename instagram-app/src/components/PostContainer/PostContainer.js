import React from 'react'
import './Post.css'
import Post from  './Post'

export default function postContainer({posts}) {
  return (
    <div className="post-container">
      {posts.map((post, i) => (
        <Post post={post} key={`${post.id} ${i}`} />
      ))}
    </div>
  );
}