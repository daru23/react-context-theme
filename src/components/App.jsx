import React from 'react';
import {ThemeProvider, ThemeConsumer} from '../contexts/ThemeContext';
import {styles} from './styles';

const App = () =>
    <ThemeProvider>
        {({toggleTheme}) => (
            <ThemeConsumer>
                {(state) => (
                    <div style={styles.wrapper}>
                        <div style={styles[state.theme]}>
                            <button onClick={toggleTheme} className={`btn btn-${state.opposite}`}>
                                {state.theme}
                            </button>
                        </div>
                    </div>
                )}
            </ThemeConsumer>
        )}
    </ThemeProvider>;

export default App;