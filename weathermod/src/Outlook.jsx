import React, { Component } from 'react';
import './App.css';

class Outlook extends Component {
  render() {
    return (
      <div className="outlook-day">
        <p className="day">Monday</p>
        <img src="http://via.placeholder.com/100x100" alt="..." />
        <p className="temperature"><strong>75 F</strong></p>
        <p className="weather">Partly Cloudy</p>
      </div>
    );
  }
}

export default Outlook;