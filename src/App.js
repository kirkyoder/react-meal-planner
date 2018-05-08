import React, { Component } from 'react';
import './App.css';

import MealPlanner from './components/MealPlanner.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Meal Planner</h1>
                <MealPlanner />
            </div>
      );
    }
}

export default App;
