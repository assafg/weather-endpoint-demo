const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getCountry(code: String): Country
    }

    type Weather {
        temp: Float
        main: String
        description: String
        icon: String
    }

    type Country {
        id: String
        name: String
        code: String
        capital: String
        borders: [Country]
        weatherInCapital: Weather
    }
`;

module.exports = typeDefs;
