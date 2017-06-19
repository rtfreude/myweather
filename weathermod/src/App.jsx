import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="weather-main">
        <div className="today-main">
          <img src="http://via.placeholder.com/200x200" alt="..." />
          <div className="today-forcast">
          </div>
        </div>
        <div className="outlook-main">
          <div className="outlook-day">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
