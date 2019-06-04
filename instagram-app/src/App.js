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
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
