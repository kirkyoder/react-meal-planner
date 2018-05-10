import React, { Component } from 'react';

import '../styles/meal-planner.css';

import { Subheader, List } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import MealDatabase from '../data/Meals';
import MealItem from './MealItem';
import NutritionLog from './NutritionLog';

import MealItemMaker from './MealItemMaker';

var _mealPlannerEntryId = 0;

class MealPlanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: [],
            mealItemMakerOpen: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.openMealItemMaker = this.openMealItemMaker.bind(this);
        this.closeMealItemMaker = this.closeMealItemMaker.bind(this);
    }

    handleClick(e, meal) {
        this.setState(function(prevState, props) {
            return {
                meals: prevState.meals.concat({
                    id: _mealPlannerEntryId++,
                    meal: meal
                })
            }
        });
    }

    handleRemove(index) {
        this.setState({
            meals: this.state.meals.filter(function(meal) {
                return meal.id !== index;
            })
        })
    }

    openMealItemMaker() {
        this.setState({
            mealItemMakerOpen: true
        });
    }

    closeMealItemMaker() {
        this.setState({
            mealItemMakerOpen: false
        });
    }

    render() {
        return (
            <div className="outer-container">
                <RaisedButton
                    label="New Meal Item"
                    primary={true}
                    onClick={this.openMealItemMaker} />
                <MealItemMaker open={this.state.mealItemMakerOpen} onClose={this.closeMealItemMaker} />
                <div className="meals-list-container">
                    <List>
                        <Subheader>Meals</Subheader>
                        {MealDatabase.map(function (meal, index) {
                            return <MealItem key={index} model={meal} onClick={this.handleClick} />;
                        }, this)}
                    </List>
                </div>

                <div className="nutrition-log-container">
                    <NutritionLog mealItems={this.state.meals} onClick={this.handleRemove} />
                </div>
            </div>
        );
    }
}

export default MealPlanner;
