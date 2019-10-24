import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/app.component';

const API_KEY = "250d65d9d372b2222ad7aa1f9c5b68e5";
//api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      tempMax: undefined,
      tempMin: undefined,
      descripton: "",
      error: false
    };
    this.getWeather();
  }

  calCelsius(temp){
    let calulation = Math.floor(temp - 273.15);
    return calulation;
  }

  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const res = await apiCall.json();

    this.setState({
      city: res.name,
      country: res.sys.country,
      celsius: this.calCelsius(res.main.temp)
    });
  };

  render() {
    return (
      <div className="App">
        <Weather 
        city={this.state.city} 
        country={this.state.country} 
        temp_celsius={this.state.celsius}
        temp_min={this.state.tempMin}
        temp_max={this.state.tempMax}
        descripton={this.state.descripton}/>
      </div>
    );
  };
}

export default App;
