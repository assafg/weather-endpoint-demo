import React, { Component } from 'react';
import CountriesContainer from './country/CountriesContainer';

class App extends Component {
    state = {
        value: 'il',
    };

    handleInputChange = evt => this.setState({ value: evt.target.value });

    handleClick = () => this.setState({ code: this.state.value });

    render() {
        return (
            <div>
                <div className="searchBar">
                    <input onChange={this.handleInputChange} />
                    <button onClick={this.handleClick}>Go</button>
                </div>
                <CountriesContainer code={this.state.code} />
            </div>
        );
    }
}

export default App;
