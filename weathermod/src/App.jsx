import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Today from './Today.jsx';
import Outlook from './Outlook';
import $ from 'jquery';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      highTemp: null,
      lowTemp: null,
      date: moment().format('LLL'),
      currTemp: null,
      currWeather: "",
      currCity: "New York",
      displayCity: "New York"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.currentWeatherCall();
    this.dailyForcastCall();
  }

  handleClick() {
    this.componentDidMount();
    this.setState({displayCity: this.state.currCity});
    this.setState({currCity: ''})
  }

  handleInputChange(event) {
    let input = event.target.value;

    this.setState({currCity: input})

  }

  currentWeatherCall() {
    const API_KEY = "307baac004d25e4d4ec945d7c93cf259";

    return $.getJSON('http://api.openweathermap.org/data/2.5/forecast?q='+ this.state.currCity +',us&units=imperial&APPID=' + API_KEY)
      .then((data) => {
        this.setState({
          currTemp: data.list[0].main.temp,
          currWeather: data.list[0].weather[0].main
        })
      });
  }

  dailyForcastCall() {
    const API_KEY = "307baac004d25e4d4ec945d7c93cf259";

    return $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ this.state.currCity +',us&units=imperial&APPID=' + API_KEY)
      .then((data) => {
        this.setState({
          highTemp: data.list[0].temp.max,
          lowTemp: data.list[0].temp.min
        })
      });
  }

  render() {
    return (
      <div className="weather-main">
        <div className="input-group">
          <input
            placeholder="Search for..."
            ref="cityInput"
            value={this.state.currCity}
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
          />
          <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.handleClick}>
            Search
          </button>
          </span>
        </div>
        <div className="today-main">
          <img src="http://via.placeholder.com/200x200" alt="..." />
          <Today
            currTemp={ Math.round(this.state.currTemp) }
            currWeather= {this.state.currWeather}
            currCity={this.state.displayCity}
            highTemp={this.state.highTemp}
            lowTemp={this.state.lowTemp}
            date={this.state.date}
          />
        </div>
        <div className="outlook-main">
          <Outlook />
        </div>
      </div>
    );
  }
}

export default App;
