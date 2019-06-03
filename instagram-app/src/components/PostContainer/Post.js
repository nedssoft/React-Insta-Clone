import React from 'react'
import './Post.css'
import CommentContainer from '../CommentSection/CommentContainer'

export default function post({post}) {
  return (
    <div className="post">
      <div className="header">
        <img src={post.thumbnailUrl} alt=""/>
        <h3>{post.username}</h3>
      </div>
      <div className="post-image">
        <img src={post.imageUrl} alt="" height="200px" width="100%"/>
      </div>
      <div className="post-likes">
        <ul>
         <li><i className="far fa-heart"></i></li>
         <li><i className="fas fa-comment"></i></li>
        </ul>
        <p>{post.likes} likes</p>
      </div>
      <CommentContainer comments={post.comments}/>
    </div>
  );
}