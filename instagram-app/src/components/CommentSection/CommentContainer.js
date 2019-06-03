import React from 'react'
import pt from 'prop-types';

import './Comment.css'
import Comment from  './Comment'
import CommentForm from './CommentForm'

export default function commentContainer({comments}) {
  return (
    <div className="comment-container">
      {comments.map((comment, i) => (
        <Comment comment={comment} key={`${comment.username}${i}`} />
      ))}
      <CommentForm />
    </div>
  );
}

commentContainer.propTypes = {
  comments: pt.array.isRequired,
}