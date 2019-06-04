import React from 'react'
import pt from 'prop-types'
import './Post.css'
import Post from  './Post'

export default function postContainer({posts, likeHandler, writeComment}) {
  return (
    <div className="post-container">
      {posts.map(post => (
        <Post post={post} key={post.id} likeHandler={likeHandler} writeComment={writeComment}/>
      ))}
    </div>
  );
}

postContainer.propTypes = {
  posts: pt.arrayOf(pt.object)
}