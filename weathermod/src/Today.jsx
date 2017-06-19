import React, { Component } from 'react';
import './App.css';

class Today extends Component {
  render() {
    return (
      <div className="today-forcast">
        <p className="today-temp">100 F</p>
        <p className="today-weather">Partly Cloudy</p>
      </div>
    );
  }
}

export default Today;