import React from 'react';
import Display from './countdown.js'
import './App.css';

export default class App extends React.Component {
  render() {
    const currentDate = new Date()
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear()
    return (
      <div className = "App">
        <div className="App-header">
          <img src={require('./12a1.svg')} className="App-logo" alt="calendar"/>
          <h2> How many days until . . .</h2>
        </div>

      <h3 className="tagline">Insert Day is on its way! (Midnight of 26th to 27th Nov, UTC time):</h3>
      <Display date={`${year}-11-27T00:00:01`} />
      </div>
    )
  }
}
