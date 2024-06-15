import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        const apiKey = '33cb37ab71ff6b77fcd630c32d7166ae';
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('Location not found');
            setWeatherData(null);
        }
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSearch = () => {
        if (location.trim() !== '') {
            fetchWeather();
        }
    };

    return (
        <div className="weather-container">
            <input 
                type="text" 
                placeholder="Enter location" 
                value={location} 
                onChange={handleLocationChange} 
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>{new Date().toLocaleString()}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
