import React, {Component, createContext} from 'react';

const ThemeContext = createContext("light");

class ThemeProvider extends Component {
    constructor() {
        super();
        this.state = {
            theme: 'light',
            opposite: 'dark'
        };
    }
    toggleTheme = () => {
        this.setState(({theme}) => ({
            theme: theme === 'light' ? 'dark' : 'light',
            opposite: theme === 'light' ? 'light' : 'dark',
        }))
    };
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children({toggleTheme: this.toggleTheme})}
            </ThemeContext.Provider>
        )
    }
}

const ThemeConsumer = ThemeContext.Consumer;

export {ThemeProvider, ThemeConsumer};