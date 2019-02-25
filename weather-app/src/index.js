import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import CountriesContainer from './country/CountriesContainer';

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <CountriesContainer />
    </ApolloProvider>,
    document.getElementById('root')
);
