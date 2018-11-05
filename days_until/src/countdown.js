import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import * as serviceWorker from './serviceWorker';

export default class DaysLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      years: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let date = this.calculateDays(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
    console.log(this.props.date);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateDays(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    const countDown = {
      years: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (diff <= 0) return false;

    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      countDown.years = Math.floor(diff / (365.25 * 86400));
      diff -= countDown.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      countDown.days = Math.floor(diff / 86400);
      diff -= countDown.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      countDown.hours = Math.floor(diff / 3600);
      diff -= countDown.hours * 3600;
    }
    if (diff >= 60) {
      countDown.minutes = Math.floor(diff / 60);
      diff -= countDown.minutes * 60;
    }
    countDown.seconds = diff;

    return countDown;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="Days">
        <span className="Days - col">
          <span className="Days-col-element">
            <strong>{this.addLeadingZeros(countDown.days)}</strong>
            <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            <span>Hours</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.minutes)}</strong>
            <span>Minutes</span>
          </span>
        </span>
      </div>
    );
  }
}

DaysLeft.propTypes = {
  date: PropTypes.string.isRequired
};

DaysLeft.defaultProps = {
  date: new Date()
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
