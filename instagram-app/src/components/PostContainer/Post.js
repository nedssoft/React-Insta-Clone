import React from 'react'
import propTypes from 'prop-types';
import './Post.css'
import CommentSection from '../CommentSection/CommentSection'

export default function Post({post}) {
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
         <li><i className="far fa-comment"></i></li>
        </ul>
        <p>{post.likes} likes</p>
      </div>
       <p className="timestamp">{post.timestamp}</p>
      <CommentSection comments={post.comments} postId={post.id} />
    </div>
  );
}
Post.propTypes = {
  post: propTypes.objectOf(propTypes.any).isRequired
}
