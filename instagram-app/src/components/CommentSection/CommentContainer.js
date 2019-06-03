import React from 'react'
import './Comment.css'
import Comment from  './Comment'

export default function post({comments}) {
  return (
    <div className="comment-container">
      {comments.map((comment, i) => (
        <Comment comment={comment} key={`${comment.id} ${i}`} />
      ))}
    </div>
  );
}