import React from 'react';
import Weather from './Weather';
import './style.css';

const Country = ({ name, capital, weatherInCapital }) => {
    return (
        <div className="countryWrapper">
            <div>{name}</div>
            <div>Capital: {capital}</div>
            {weatherInCapital ? (
                <Weather {...weatherInCapital} />
            ) : (
                <div>N/A</div>
            )}
        </div>
    );
};

export default Country;
