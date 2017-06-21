import React, { Component } from 'react';

import './App.css';

class Today extends Component {
  render() {
    return (
      <div className="today-forcast">
        <p className="today-city">{this.props.currCity}</p>
        <p className="today-date">{this.props.date}</p>
        <div>
          <p className="today-temp-curr">{this.props.currTemp}</p>
          <div className="today-extremes">
            <div className="today-extreme-high">
              <p className="today-temp-high">{Math.round(this.props.highTemp)}</p>
              <p className="desc-text">high</p>
            </div>
            <div  className="today-extreme-low">
              <p className="today-temp-low">{Math.round(this.props.lowTemp)}</p>
              <p className="desc-text">low</p>
            </div>
          </div>
        </div>
        <p className="today-weather">{this.props.currWeather}</p>
      </div>
    );
  }
}

export default Today;