require('dotenv').config();
const request = require('request-promise-native');

const key = process.env.API_KEY; // openweathermap API Key
const apiQuery = 'http://api.openweathermap.org/data/2.5/'; // openweathermap API endpoint

const fetchWeather = async ({ city, country, units = 'metric' }) => {
    const data = await request(
        `${apiQuery}weather?q=${encodeURI(
            city
        )},${country}&appid=${key}&units=${units}`
    );
    const jsonData = JSON.parse(data);

    // Map the returned data to desired schema
    return {
        temp: jsonData.main.temp,
        main: jsonData.weather[0].main,
        description: jsonData.weather[0].description,
        icon: jsonData.weather[0].icon,
    };
};

const getCountry = async ({ code }) => {
    const data = await request(
        `https://restcountries.eu/rest/v2/alpha/${code}`
    );
    const jsonData = JSON.parse(data);

    // Map the returned data to desired schema
    return {
        id: jsonData.alpha2Code,
        name: jsonData.name,
        code: jsonData.alpha2Code,
        borders: jsonData.borders,
        capital: jsonData.capital,
    };
};

module.exports = {
    fetchWeather,
    getCountry,
};
