import React from 'react'
import './Comment.css'

export default function commentForm({commentInputHandler, addComment, value, postId}) {
  return (
    <div className="comment-form">
      <form onSubmit={addComment}>
        <input type="text" onChange={commentInputHandler} value={value} placeholder="Add comment" data-post-id={postId}/>
      </form>
      <button><i className="fas fa-ellipsis-h"></i></button>
    </div>
  );
}