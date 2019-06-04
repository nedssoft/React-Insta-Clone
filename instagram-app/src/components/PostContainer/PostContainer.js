import React from 'react'
import pt from 'prop-types'
import './Post.css'
import Post from  './Post'

export default function postContainer({posts, likeHandler}) {
  return (
    <div className="post-container">
      {posts.map(post => (
        <Post post={post} key={post.id} likeHandler={likeHandler} />
      ))}
    </div>
  );
}

postContainer.propTypes = {
  posts: pt.arrayOf(pt.object)
}