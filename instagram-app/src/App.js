import React, { Component } from 'react';
import './App.css';
import './components/SearchBar/SearchBar'
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
import Spinner from './components/UI/Spinner/Spinner'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        posts: dummyData,
      }))
    }, 5000);
  }
  likePostHandler = (postId) => {
    const updatedPosts = this.state.posts.map(post => {
      if (post.id === postId) {
        post['likes'] = post['likes'] + 1;
        return post
      }
      return post;
    })
    this.setState(prevState => ({
      ...prevState,
      posts: updatedPosts
    }))
  }
  writeComment = (postId) => {
    const inputEl = document.querySelector(`input[data-post-id="${postId}"]`);
    inputEl.focus();
  }
  render() {
    let contentToRender = <Spinner />
    if (this.state.posts.length) {
      contentToRender = (
        <PostContainer
          posts={this.state.posts}
          likeHandler={this.likePostHandler}
          writeComment={this.writeComment}
        />
      );
    }
    return (
      <div className="App">
        <SearchBar />
        {contentToRender}
      </div>
    );
  }
}

export default App;
