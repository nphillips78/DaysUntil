import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import * as serviceWorker from './serviceWorker';

export default class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let date = this.calculateDays(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 60000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateDays(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 60000;

    if (diff <= 0) return false;

    const remaining = {
      years: 0,
      days: 0,
      hours: 0,
      minutes: 0
    };

    if (diff >= 365.25 * 1440) {
      remaining.years = Math.floor(diff / (365.25 * 1440));
      diff -= remaining.years * 365.25 * 1440;
    }
    if (diff >= 1440) {
      remaining.days = Math.floor(diff / 1440);
      diff -= remaining.days * 1440;
    }
    if (diff >= 60) {
      remaining.min = Math.floor(diff / 60);
      diff -= remaining.min * 60;
    }

    return remaining;
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
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>Minutes</span>
          </span>
        </span>
      </div>
    );
  }
}

Display.propTypes = {
  date: PropTypes.string.isRequired
};

Display.defaultProps = {
  date: new Date()
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
