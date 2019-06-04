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
      searchResult: null,
      searchTerm: '',
      msg:''
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
  searchHandler = ({target}) => {
    this.setState(prevState =>({
      ...prevState,
      searchTerm: target.value,
    }), () => {
      if (this.state.searchTerm) {
        const matchedPosts = this.state.posts.filter(post => {
          return post.username.includes(this.state.searchTerm)
        })
        if (matchedPosts.length) {
          this.setState(prevState => ({
            ...prevState,
            searchResult: matchedPosts,
          }))
        } else {
          this.setState(prevState => ({
            ...prevState,
            msg: `No post found for username ${this.state.searchTerm}`
          }))
        }
      } else {
        this.setState(prevState => ({
          ...prevState,
          msg: ','
        }))
      }
    });
  }
  render() {
    let contentToRender = <Spinner />
    if (this.state.posts.length) {
      contentToRender = (
        <PostContainer
          posts={this.state.searchResult || this.state.posts}
          likeHandler={this.likePostHandler}
          writeComment={this.writeComment}
        />
      );
    }
    return (
      <div className="App">
        <SearchBar  searchHandler={this.searchHandler} value={this.state.searchTerm}/>
        {this.state.msg && <p style={{fontSize: '1.6rem', textAlign: 'center'}}>{this.state.msg}</p>}
        {contentToRender}
      </div>
    );
  }
}

export default App;
