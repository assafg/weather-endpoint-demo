// CountriesContainer

import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import query from './country-query';
import Country from './Country';
import './style.css';

const CountriesContainer = props => {
    if (!props.code) {
        return null;
    }
    return (
        <Query query={query} variables={props} errorPolicy="all">
            {({ loading, error, data }) => {
                if (error) {
                    console.error(error);
                }
                if (loading) {
                    return 'loading...';
                }
                if (!data) {
                    return 'Not Found';
                }
                return (
                    <React.Fragment>
                        <Country {...data.getCountry} />
                        <div className="bordersWrapper">
                            {data.getCountry &&
                                data.getCountry.borders.map(country => (
                                    <Country key={country.code} {...country} />
                                ))}
                        </div>
                    </React.Fragment>
                );
            }}
        </Query>
    );
};

CountriesContainer.propTypes = {
    code: PropTypes.string,
};

export default CountriesContainer;
