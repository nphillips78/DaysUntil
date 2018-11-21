import React from 'react';
import DaysLeft from './countdown.js';
import '../App.css';
import { withStyles, TextField, Button, Paper, Typography } from '@material-ui/core';
import { styles } from './styles';
import moment from 'moment';

class CountdownView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      date: moment().format('MM-DD'),
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
    this.setState({ date: value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const form = {          //get form values
     title: this.state.title,
     date: this.state.date,
    }; 
   /* backend.post(form);  //TODO:change this to post to our databaser server
      this.setState({  //clear input fields
        title: '',
        date: ''
      }); */
  }; 
  


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

    // TODO: NavBar or side nav
    // TODO: User admin type view - choose settings/pics and choose default countdown
    // TODO: customizable picture choices
    // TODO: fix login verbiage to be english
    // TODO: form validation/error messages
    // TODO: shared/public view for family
    // TODO: make shareable to FB/Insta/Twitter?
    // TODO: SMS reminders
    // TODO: fix netlify
    // TODO: deploy backend
    // TODO: make it mobile
    
    return (<div className="App">
        <div className="App-header">
          <img src={require('./Assets/12a1.svg')} className="App-logo" alt="calendar" />
          <h2> How many days until . . .</h2>
        </div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField id="outlined" value={this.state.title} label="Name the event" className={classes.textField} onChange={this.changeTitle} type="title" margin="normal" placeholder={`ex: "${"Babe's Birthday"}" `} variant="outlined" InputLabelProps={{ shrink: true }} />
         { <TextField id="outlined" value={this.state.date} label="Choose a date" className={classes.textField} onChange={this.handleChange} type="date" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} /> }
        </form>
        <Button variant="contained" className={classes.button} onClick={e => this.onSubmit(e)}>
          Start the Countdown!
        </Button>
        <div>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              {this.state.title} is on its way!
            </Typography>
            <DaysLeft date={`${this.state.date}T00:00:00`} />
          </Paper>
        </div>
    </div>);
  };
}


export default withStyles(styles)(CountdownView);