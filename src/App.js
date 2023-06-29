import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './doggy.png';
import './App.css';
import { useEffect, useState } from 'react';

function LoginPage() {
    // Create your login form here   nhh
    return (
        <div className="center-content">
            <h2>Login Page</h2>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

function HomePage() {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = () => {
        fetch('http://localhost:8080/weather')
            .then(response => response.json())
            .then(data => setWeatherData(data));
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to is Doggy website!
                </p>
                <Link className="App-link" to="/login">
                    Get started
                </Link>
                {!weatherData ? (
                    <button className="Weather-button" onClick={fetchWeatherData}>
                        How is the weather?
                    </button>
                ) : (
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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
