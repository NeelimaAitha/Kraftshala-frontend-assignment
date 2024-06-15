import React, { useState } from 'react';
import Weather from './components/Weather';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'app dark-mode' : 'app'}>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <h1 className='heading'>Weather App</h1>
            <Weather />
        </div>
    );
};

export default App;
