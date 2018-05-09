import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MealPlanner from './components/MealPlanner.js';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <h1>Meal Planner</h1>
                    <MealPlanner />
                </div>
            </MuiThemeProvider>
      );
    }
}

export default App;
