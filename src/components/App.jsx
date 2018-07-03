import React, {Component} from 'react';
import {ThemeProvider, ThemeConsumer} from '../contexts/ThemeContext';
import {styles} from './styles';

export default class App extends Component {
    render() {
        return (<ThemeProvider>
            {({toggleTheme}) => (
                <ThemeConsumer>
                    {theme => (
                        <div
                            style={{
                                textAlign: 'center',
                                border: '1px solid',
                            }}
                        >
                            <div style={styles[theme]}>
                                <button onClick={toggleTheme}>
                                    {theme}
                                </button>
                            </div>
                        </div>
                    )}
                </ThemeConsumer>
            )}
        </ThemeProvider>);
    }
}