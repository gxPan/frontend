import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      fetch('http://localhost:8080/weather')
          .then(response => response.json())
          .then(data => setWeatherData(data));
    }, []);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="http://localhost:8080/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started
          </a>
        {weatherData && (
            <div className="Weather">
              <h2>Weather Information</h2>
              <p>Location: {weatherData.location.name}</p>
              <p>Temperature: {weatherData.current.temp_c} °C</p>
              <p>Condition: {weatherData.current.condition.text}</p>
              {/* Can display more data according to demands */}
            </div>
        )}
        </header>
      </div>
    );
}

export default App;
