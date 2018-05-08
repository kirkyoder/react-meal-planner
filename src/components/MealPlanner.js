import React, { Component } from 'react';

import MealDatabase from '../data/Meals.js';

import MealItem from './MealItem.js';
import NutritionLog from './NutritionLog.js';

class MealPlanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, meal) {
        this.setState(function(prevState, props) {
            return {
                meals: prevState.meals.concat(meal)
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    {MealDatabase.map(function (meal, index) {
                        return <MealItem key={index} model={meal} onClick={this.handleClick} />;
                    }, this)}
                </div>

                <NutritionLog mealItems={this.state.meals} />
            </div>
        );
    }
}

export default MealPlanner;
