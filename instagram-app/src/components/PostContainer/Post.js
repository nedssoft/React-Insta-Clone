import React from 'react'
import propTypes from 'prop-types';
import moment from 'moment';
import PostWrapper from './PostStyle';
import CommentSection from '../CommentSection/CommentSection'

export default function Post({ post, likeHandler, writeComment, updatePostComments }) {
  let style = {};
  if (post.liked) {
    style = {
      color: 'rgb(165, 58, 76)'
    }
  }
  return (
    <PostWrapper>
      <div className="header">
        <img src={post.thumbnailUrl} alt="" />
        <h3>{post.username}</h3>
      </div>
      <div className="post-image">
        <img src={post.imageUrl} alt="" height="200px" width="100%" />
      </div>
      <div className="post-likes">
        <ul>
          <li onClick={() => likeHandler(post.id)} title="Like"><i className="far fa-heart" style={style}></i></li>
          <li title="Add comment" onClick={() => writeComment(post.id)}><i className="far fa-comment"></i></li>
        </ul>
        <p>{post.likes} likes</p>
      </div>
      <p className="timestamp">{moment(post.timestamp, 'mm/dd/Y, h:m:s a').fromNow()}</p>
      <CommentSection
        comments={post.comments} postId={post.id}
        updatePostComments={updatePostComments}
      />
    </PostWrapper>
  );
}
Post.propTypes = {
  post: propTypes.objectOf(propTypes.any).isRequired
}


