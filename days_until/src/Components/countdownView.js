import React from 'react';
import DaysLeft from './countdown.js';
import '../App.css';
import { withStyles, TextField, Button, Paper, Typography } from '@material-ui/core';
import { styles } from './styles';


class CountdownView extends React.Component {
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
     title: this.state.title,
     date: this.state.date,
    }; 
  } 
  


  render() {
    
    const { classes } = this.props;
    const currentDate = new Date();
    const year =
      currentDate.getMonth() && currentDate.getDate
        ? currentDate.getFullYear()
        : currentDate.getFullYear();
    console.log('year is ' + year);
    console.log('month is ' + currentDate.getMonth());
    console.log('today is ' + currentDate.getDate());

    return <div className="App">
        <div className="App-header">
          <img src={require('./Assets/12a1.svg')} className="App-logo" alt="calendar" />
          <h2> How many days until . . .</h2>
        </div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField value={this.state.title} label="Name the event." className={classes.textField} onChange={this.changeTitle} type="title" InputLabelProps={{ shrink: true }} />
          <TextField value={this.state.date} className={classes.textField} onChange={this.handleChange} type="date" InputLabelProps={{ shrink: true }} />
        </form>
        <Button variant="contained" className={classes.button} onClick={e => this.onSubmit(e)}>
          Start the Countdown!
        </Button>
        <div>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              {this.state.title} is on its way!
            </Typography>
            <DaysLeft date={`${year}-${this.state.text}T00:00:00`} />
          </Paper>
        </div>
      </div>;
  }
}


export default withStyles(styles)(CountdownView);