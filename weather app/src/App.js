import React from 'react';
import Head from "./Components/head";
import Weather from "./Components/weather";
import Info from "./Components/info";
import "./Components/style.css";

const API_KEY = "99f8203d6873dd36603fed38db191646";

export default class App extends React.Component{

  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }

  Weather = async(e) => {
    e.preventDefault();
    const City = e.target.elements.city.value;
    const Country = e.target.elements.country.value;
    const Call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&unitmetric`);
    const Data = await Call.json();

    if (City && Country) {
      this.setState({
      temperature : Data.main.temp,
      city : Data.name,
      country : Data.sys.country,
      humidity : Data.main.humidity,
      description : Data.weather[0].description,
      error : ""
    });
  } else{
      this.setState({
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      error : "Please Enter The Values."
    });
  }
}

  render(){
   return(
       <div>
           <Head/>
           <Info Weather={this.Weather} />
           <Weather 
           temperature={this.state.temperature}
           city={this.state.city}
           country={this.state.country}
           humidity={this.state.humidity}
           description={this.state.description}
           error={this.state.error}
           />
       </div>
   )
  }
   
}
