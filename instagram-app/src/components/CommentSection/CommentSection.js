import React from 'react'
import pt from 'prop-types';
import Comment from './Comment'
import CommentForm from './CommentForm'
import CommentSectionWrapper from './CommentStyle'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      postId: this.props.postId,
      newComment: '',
      user: null,
    }
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      user: JSON.parse(localStorage.getItem('user'))
    }))
  }

  commentInputHandler = ({ target }) => {
    const value = target.value;
    this.setState(prevState => ({
      ...prevState,
      newComment: value,
    }))
  }
  
  addComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: this.state.comments.length + 1,
      username: this.state.user.username,
      text: this.state.newComment,
    }
    const oldComments = this.state.comments;
    const updatedComments = oldComments.concat(newComment)
    if (this.state.newComment) {
      this.setState(prevState => ({
        ...prevState,
        comments: updatedComments,
        newComment: ''
      }), () => {
        this.props.updatePostComments(this.props.postId, this.state.comments)
      })

    }
  }

  deleteComment = (commentId) => {
    const updatedComments = this.state.comments.filter(comment => {
      return comment.id !== commentId
    });
    this.setState(prevState => ({
      ...prevState,
      comments: updatedComments,
    }), () => this.props.updatePostComments(this.props.postId, this.state.comments))
  }
  render() {
    return (
      <CommentSectionWrapper>
        {this.state.comments.map(comment => (
          <Comment
            comment={comment}
            key={comment.id}
            deleteComment={this.deleteComment}
          />
        ))}
        <CommentForm
          commentInputHandler={this.commentInputHandler}
          addComment={this.addComment}
          value={this.state.newComment}
          postId={this.props.postId}
        />
      </CommentSectionWrapper>
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