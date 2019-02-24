import React, { Component } from 'react';
import CountriesContainer from './country/CountriesContainer';

class App extends Component {
    state = {
        value: 'il',
    };

    handleInputChange = evt => this.setState({ value: evt.target.value });

    handleClick = () => this.setState({ code: this.state.value });

    render() {
        return <CountriesContainer code={this.state.code} />;
    }
}

export default App;
