import React, { Component } from 'react';

import MealDatabase from '../data/Meals.js';

import MealItem from './MealItem.js';
import NutritionLog from './NutritionLog.js';

class MealPlanner extends Component {
    constructor(props) {
        super(props);

        this._mealId = 0;

        this.state = {
            meals: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleClick(e, meal) {
        this.setState(function(prevState, props) {
            return {
                meals: prevState.meals.concat({
                    id: this._mealId++,
                    meal: meal
                })
            }
        });
    }

    handleRemove(e) {
        let index = e.currentTarget.getAttribute('mealid');

        this.setState({
            meals: this.state.meals.filter(function(meal) {
                return meal.id.toString() !== index;
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    {MealDatabase.map(function (meal, index) {
                        return <MealItem key={index} model={meal} onClick={this.handleClick} />;
                    }, this)}
                </div>

                <NutritionLog mealItems={this.state.meals} onClick={this.handleRemove} />
            </div>
        );
    }
}

export default MealPlanner;
