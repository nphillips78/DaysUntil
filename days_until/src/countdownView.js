import React from 'react';
import DaysLeft from './countdown.js';
import './App.css';

export default class countdownView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }
  changeTitle = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ title: value });
  };
  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ text: value });
  };
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() && currentDate.getDate
        ? currentDate.getFullYear()
        : currentDate.getFullYear();
    console.log('year is ' + year);
    console.log('month is ' + currentDate.getMonth());
    console.log('today is ' + currentDate.getDate());

    return (
      <div className="App">
        <div className="App-header">
          <img
            src={require('./12a1.svg')}
            className="App-logo"
            alt="calendar"
          />
          <h2> How many days until . . .</h2>
        </div>
        <div className="input">
          <input
            value={this.state.title}
            placeholder="Name the day!"
            onChange={this.changeTitle}
            type="title"
          />
          <input
            value={this.state.text}
            placeholder="Month and Day"
            onChange={this.handleChange}
            type="text"
          />
        </div>

        <h3 className="tagline">{this.state.title} is on its way!</h3>
        <DaysLeft date={`${year}-${this.state.text}T00:00:00`} />
      </div>
    );
  }
}
