const { fetchWeather, getCountry } = require('./api');

const resolvers = {
    Country: {
        borders: async parent => {
            const borderCountries = parent.borders.map(async code => {
                countryData = await getCountry({ code });
                return countryData;
            });
            return borderCountries;
        },
        weatherInCapital: async parent => {
            const weather = await fetchWeather({
                city: parent.capital,
                country: parent.code,
            });
            return weather;
        },
    },

    Query: {
        getCountry: async (_, args) => {
            const country = await getCountry(args);
            return country;
        },
    },
};

module.exports = resolvers;
