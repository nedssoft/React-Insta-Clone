import React, {Component} from 'react';
import './App.css';
import './components/SearchBar/SearchBar'
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={dummyData} />
      </div>
    );
  }
}

export default App;
