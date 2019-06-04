import React from 'react'
import propTypes from 'prop-types';
import './Comment.css'

function Comment({ comment, deleteComment }) {
  return (
    <div className="comment">
      <p><strong>{comment.username}</strong> {comment.text} | <span className="delete-comment" onClick={() => deleteComment(comment.id)}>Delete</span></p>
    </div>
  );
}

Comment.propTypes = {
  comment: propTypes.shape({
    username: propTypes.string,
    text: propTypes.string,
  }).isRequired
}

export default Comment;