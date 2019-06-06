import React from 'react'
import pt from 'prop-types'
import Post from './Post'
import Spinner from '../UI/Spinner/Spinner'

export default function postPage({ posts, likeHandler, writeComment, updatePostComments }) {
  let contentToRender = <Spinner />
  if (posts.length) {
    contentToRender = (posts.map(post => (
      <Post
        post={post} key={post.id}
        likeHandler={likeHandler}
        writeComment={writeComment}
        updatePostComments={updatePostComments}
      />
    )))
  }
  return (
    <div className="post-container">
      {contentToRender}
    </div>
  );
}

postPage.propTypes = {
  posts: pt.arrayOf(pt.object)
}