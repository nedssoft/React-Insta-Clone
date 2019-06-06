import React from 'react'
import styled from 'styled-components'

const CommentFormWrapper = styled.div`
  height: 70px;
  width: 96%;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin: auto;
  form {
    width: 80%;
  }
  input {
    height: 100%;
    width:100%;
    outline: none;
    padding: 2rem 1rem;
    border: none;
    font-size: 1.6rem;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  button i {
    font-size: 1.8rem;
  }
`

export default function commentForm({commentInputHandler, addComment, value, postId}) {
  return (
    <CommentFormWrapper>
      <form onSubmit={addComment}>
        <input type="text" onChange={commentInputHandler} value={value} placeholder="Add comment" data-post-id={postId}/>
      </form>
      <button><i className="fas fa-ellipsis-h"></i></button>
    </CommentFormWrapper>
  );
}