// CountriesContainer

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import query from './country-query';
import Country from './Country';
import './style.css';

class CountriesContainer extends PureComponent {
    state = {
        value: 'il',
    };

    handleInputChange = evt => this.setState({ value: evt.target.value });

    handleClick = () => this.setState({ code: this.state.value });

    refetch = () => {
        this.refreshFunc && this.refreshFunc();
    };
    render() {
        return (
            <React.Fragment>
                <div className="searchBar">
                    <input onChange={this.handleInputChange} />
                    <button onClick={this.handleClick}>Go</button>
                    <button onClick={this.refetch}>Refresh</button>
                </div>
                {this.state.code && (
                    <Query
                        query={query}
                        variables={{ code: this.state.code }}
                        errorPolicy="all"
                    >
                        {({ loading, error, data, refetch }) => {
                            if (error) {
                                console.error(error);
                            }
                            if (loading) {
                                return 'loading...';
                            }
                            this.refreshFunc = refetch;

                            if (!data) {
                                return 'Not Found';
                            }
                            return (
                                <React.Fragment>
                                    <Country {...data.getCountry} />
                                    <div className="bordersWrapper">
                                        {data.getCountry &&
                                            data.getCountry.borders.map(
                                                country => (
                                                    <Country
                                                        key={country.code}
                                                        {...country}
                                                    />
                                                )
                                            )}
                                    </div>
                                </React.Fragment>
                            );
                        }}
                    </Query>
                )}
            </React.Fragment>
        );
    }
}

CountriesContainer.propTypes = {
    code: PropTypes.string,
};

export default CountriesContainer;
