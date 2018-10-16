import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./calendar-1.png')} className="App-logo" alt="calendar" />
          <p>
           How many days until. . . 
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
