import React, { Component } from 'react';
import AppWrapper from './AppStyle'
import './components/SearchBar/SearchBar'
import SearchBar from './components/SearchBar/SearchBar';
import PostPage from './components/PostContainer/PostPage'
import dummyData from './dummy-data';
import withAuthenticate from './components/authentication/withAuthenticate'
import LoginPage from './components/Login/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchTerm: '',
      msg: '',
      isLoggedIn: false,
      showDropDown: false,
    }

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        posts: this.getPosts(),
        isLoggedIn: !!localStorage.getItem('user')
      }))
    }, 500);
  }
  likePostHandler = (postId) => {
    const updatedPosts = this.state.posts.map(post => {
      if (post.id === postId) {
        if (post['liked']) {
          post['likes'] = post['likes'] - 1;
          post['liked'] = false;
        } else {
          post['likes'] = post['likes'] + 1;
          post['liked'] = true;
        }
        return post
      }
      return post;
    })
    this.setState(prevState => ({
      ...prevState,
      posts: updatedPosts
    }), () => this.setPost(this.state.posts))
  }
  writeComment = (postId) => {
    const inputEl = document.querySelector(`input[data-post-id="${postId}"]`);
    inputEl.focus();
  }
  searchHandler = ({ target }) => {
    this.setState(prevState => ({
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
            posts: matchedPosts,
            msg: `${matchedPosts.length} post(s) found`
          }))
        } else {
          this.setState(prevState => ({
            ...prevState,
            posts: [],
            msg: `No post found for username ${this.state.searchTerm}`
          }))
        }
      } else {
        this.setState(prevState => ({
          ...prevState,
          msg: '',
          posts: this.getPosts()
        }))
      }
    });
  }
  getPosts = () => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (posts) {
      return posts;
    } else {
      localStorage.setItem('posts', JSON.stringify(dummyData));
      return dummyData;
    }
  }
  setPost = (posts) => {
    localStorage.removeItem('posts');
    localStorage.setItem('posts', JSON.stringify(posts));
    this.setState(prevState => ({
      ...prevState,
      posts: posts,
    }))
  }
  updatePostComments = (postId, comments) => {
    const updatePosts = this.state.posts.map(post => {
      if (post.id === postId) {
        post.comments = comments;
        return post;
      }
      return post;
    });
    this.setPost(updatePosts);
  }
  loginUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    this.setState(prevState => ({
      ...prevState,
      isLoggedIn: true,
    }));
  }
  toggleDropDown = () => {
    this.setState(prevState => ({
      ...prevState,
      showDropDown: !prevState.showDropDown
    }))
  }
  logout = () => {
    localStorage.removeItem('user');
    this.setState(prevState =>({
      ...prevState,
      isLoggedIn: false,
    }))
  }
  render() {
    const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage)
    return (
      <AppWrapper>
        {this.state.isLoggedIn && (
          <SearchBar 
        searchHandler={this.searchHandler} 
        value={this.state.searchTerm} 
        showDropDown={this.state.isLoggedIn && this.state.showDropDown}
        toggleDropDown={this.toggleDropDown}
        logout={this.logout}
        />
        )}
        {this.state.msg && <p style={{ fontSize: '1.6rem', textAlign: 'center' }}>{this.state.msg}</p>}
        {<ComponentFromWithAuthenticate
          posts={this.state.posts}
          likeHandler={this.likePostHandler}
          writeComment={this.writeComment}
          updatePostComments={this.updatePostComments}
          loginUser={this.loginUser}
        />}
      </AppWrapper>
    );
  }
}

export default App;
