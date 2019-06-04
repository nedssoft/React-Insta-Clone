import React from 'react'
import pt from 'prop-types'
import './Post.css'
import Post from  './Post'

export default function postContainer({posts}) {
  return (
    <div className="post-container">
      {posts.map((post, i) => (
        <Post post={post} key={`${post.username}${i}`} />
      ))}
    </div>
  );
}

postContainer.propTypes = {
  posts: pt.arrayOf(pt.object)
}