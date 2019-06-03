import React, {Component} from 'react';
import './App.css';
import './components/SearchBar/SearchBar'
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
