import React from 'react'
import propTypes from 'prop-types';
import styled from 'styled-components';
const CommentWrapper = styled.div`
  margin: 0.8rem;
  padding-left: 1rem;
  p {
    font-size: 1.6rem;
    padding:0;
    margin:0;
  }
  .delete-comment {
    text-decoration: underline;
    cursor: pointer;
  }
  .delete-comment:hover {
    color: rgb(165, 58, 76);
    transition: .2s ease-in-out;
  }
`
function Comment({ comment, deleteComment }) {
  return (
    <CommentWrapper>
      <p><strong>{comment.username}</strong> {comment.text} | <span className="delete-comment" onClick={() => deleteComment(comment.id)}>Delete</span></p>
    </CommentWrapper>
  );
}

Comment.propTypes = {
  comment: propTypes.shape({
    username: propTypes.string,
    text: propTypes.string,
  }).isRequired
}

export default Comment;