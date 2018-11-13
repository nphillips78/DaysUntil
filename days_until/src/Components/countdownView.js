import React from 'react';
import DaysLeft from './countdown.js';
import '../App.css';
import { Button } from 'react-bootstrap';
import DatePicker from './DatePicker';

export default class CountdownView extends React.Component {
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
  onSubmit = (e) => {
    e.preventDefault();
    const form = {
     name: this.state.name,
     email: this.state.email
    }     
  }                                        
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
            src={require('./Assets/12a1.svg')}
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
          <input onChange={this.handleChange} />
          <DatePicker />
        </div>

        <h3 className="tagline">{this.state.title} is on its way!</h3>
        <DaysLeft date={`${year}-${this.state.text}T00:00:00`} />
        <Button onClick={(e) => this.onSubmit(e)}>Submit</Button>

      </div>
    );
  }
}
