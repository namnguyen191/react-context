import React from 'react';

const Context = React.createContext('red');

export class ColorContext extends React.Component {
    state = { color: 'primary' };

    onColorChanage = (color) => {
        this.setState({ color });
    };

    render() {
        return (
            <Context.Provider value={{ ...this.state, onColorChanage: this.onColorChanage }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;