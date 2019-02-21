import React from 'react';
import './style.css';

const Weather = ({ temp, main, description, icon }) => {
    return (
        <div className="weatherWrapper">
            <div>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} />
            </div>
            <div>
                <div>
                    {temp}&#8451; <i>{main}</i>
                </div>
                <div>{description}</div>
            </div>
        </div>
    );
};

export default Weather;
