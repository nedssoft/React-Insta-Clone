import React from 'react'
import pt from 'prop-types';

import './Comment.css'
import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      postId: this.props.postId,
      newComment: '',
    }
  }
  commentInputHandler = ({target}) => {
    const value = target.value;
      this.setState(prevState => ({
        ...prevState,
        newComment: value,
      }))
  }
  addComment =(event) => {
    event.preventDefault();
    const newComment = {
      id: this.state.comments.length +1,
      username:'JonDoe',
      text: this.state.newComment,
    }
    const oldComments = this.state.comments;
    const updatedComments = oldComments.concat(newComment)
    if (this.state.newComment) {
      this.setState(prevState => ({
        ...prevState,
        comments: updatedComments,
        newComment: ''
      }))
    }
  }
  render() {
    return (
      <div className="comment-container">
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <CommentForm
          commentInputHandler={this.commentInputHandler}
          addComment={this.addComment}
          value={this.state.newComment}
          postId={this.props.postId}
        />
      </div>
    );
  }
}

CommentSection.defaultProps = {
  comments: []
}
CommentSection.propTypes = {
  comments: pt.array.isRequired,
}


export default CommentSection;