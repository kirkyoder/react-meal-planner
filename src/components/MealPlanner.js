import React, { Component } from 'react';

import '../styles/meal-planner.css';

import { Subheader, List } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import MealItemEnumerator from './MealItemEnumerator';
import MealItemModel from '../models/MealItemModel';
import NutritionLog from './NutritionLog';

import MealItemMaker from './MealItemMaker';

var _mealPlannerEntryId = 0;

class MealPlanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableMeals: props.meals,
            plannedMeals: [],
            mealItemMakerOpen: false
        }

        this.handleMealAdded = this.handleMealAdded.bind(this);
        this.handleMealRemoved = this.handleMealRemoved.bind(this);

        this.openMealItemMaker = this.openMealItemMaker.bind(this);
        this.closeMealItemMaker = this.closeMealItemMaker.bind(this);

        this.addMealItem = this.addMealItem.bind(this);
    }

    handleMealAdded(e, meal) {
        this.setState(function(prevState, props) {
            return {
                plannedMeals: prevState.plannedMeals.concat({
                    id: _mealPlannerEntryId++,
                    meal: meal
                })
            }
        });
    }

    handleMealRemoved(index) {
        this.setState({
            plannedMeals: this.state.plannedMeals.filter(function(meal) {
                return meal.id !== index;
            })
        })
    }

    addMealItem() {
        this.setState(function(prevState, props) {
            return {
                availableMeals: prevState.availableMeals.concat(
                    new MealItemModel({
                        name: 'foo bar',
                        calories: 100,
                        protein: 50,
                        carbs: 3,
                        fat: 9
                    })
                )
            }
        });
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
                    onClick={this.addMealItem} />
                <MealItemMaker open={this.state.mealItemMakerOpen} onClose={this.closeMealItemMaker} />
                <div className="meals-list-container">
                    <List>
                        <Subheader>Meals</Subheader>
                        <MealItemEnumerator
                            meals={this.state.availableMeals}
                            onItemClicked={this.handleMealAdded} />
                    </List>
                </div>

                <div className="nutrition-log-container">
                    <NutritionLog mealItems={this.state.plannedMeals} onClick={this.handleMealRemoved} />
                </div>
            </div>
        );
    }
}

export default MealPlanner;
