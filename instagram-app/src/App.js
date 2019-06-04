import React, { Component } from 'react';
import './App.css';
import './components/SearchBar/SearchBar'
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData
    }
  }
  likePostHandler = (postId) => {
    const updatedPosts = this.state.posts.map(post => {
      if (post.id === postId) {
        post['likes'] = post['likes'] + 1;
        return post
      }
      return post;
    })
    this.setState(prevState =>({
      ...prevState,
      posts: updatedPosts
    }))
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} likeHandler={this.likePostHandler} />
      </div>
    );
  }
}

export default App;
