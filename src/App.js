import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MealDatabase from './data/Meals';
import MealPlanner from './components/MealPlanner';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <h1>Meal Planner</h1>
                    <MealPlanner meals={MealDatabase.getMealItems()} />
                </div>
            </MuiThemeProvider>
      );
    }
}

export default App;
