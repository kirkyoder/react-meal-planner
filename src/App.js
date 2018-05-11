import React, { Component } from 'react';
import './App.css';

import { blue600 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MealDatabase from './data/Meals';
import MealPlanner from './components/MealPlanner';

class App extends Component {
    render() {
        const muiTheme = {
            palette: {
                primary1Color: blue600,
            }
        };

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <div className="App">
                    <MealPlanner meals={MealDatabase.getMealItems()} />
                </div>
            </MuiThemeProvider>
      );
    }
}

export default App;
