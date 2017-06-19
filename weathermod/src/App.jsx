import React, { Component } from 'react';
import './App.css';
import Today from './Today.jsx';
import Outlook from './Outlook.jsx';
import $ from 'jquery';

class App extends Component {
  constructor (props) {
    super(props);

  }



  weatherCall() {
    const API_KEY = "307baac004d25e4d4ec945d7c93cf259";
    return $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=appleton,us&units=imperial&APPID=' + API_KEY)
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="weather-main">
        <div className="today-main">
          <img src="http://via.placeholder.com/200x200" alt="..." />
          <Today />
        </div>
        <div className="outlook-main">
          <Outlook />
          {this.weatherCall()}
        </div>
      </div>
    );
  }
}

export default App;
