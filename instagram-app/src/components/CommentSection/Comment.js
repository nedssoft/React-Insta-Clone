import React from 'react'
import propTypes from 'prop-types';
import './Comment.css'


function Comment({ comment }) {
  return (
    <div className="comment">
      <p><strong>{comment.username}</strong> {comment.text}</p>
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