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
            availableMeals: props.meals || [],
            plannedMeals: [],
            mealItemMakerOpen: true
        }

        this.handleMealAdded = this.handleMealAdded.bind(this);
        this.handleMealRemoved = this.handleMealRemoved.bind(this);

        this.openMealItemMaker = this.openMealItemMaker.bind(this);
        this.onMealItemMakerClosed = this.onMealItemMakerClosed.bind(this);

        this._addMealItem = this._addMealItem.bind(this);
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
        });
    }

    _addMealItem(mealItem) {
        this.setState(function(prevState, props) {
            return {
                availableMeals: prevState.availableMeals.concat(mealItem)
            }
        });
    }

    openMealItemMaker() {
        this.setState({ mealItemMakerOpen: true });
    }

    onMealItemMakerClosed(data) {
        if (data) {
            this._addMealItem(new MealItemModel({
                name: data.name,
                calories: data.calories,
                protein: data.protein,
                carbs: data.carbs,
                fat: data.fat
            }));
        }

        // close the meal item maker
        this.setState({ mealItemMakerOpen: false });
    }

    render() {
        return (
            <div className="outer-container">
                <RaisedButton
                    label="New Meal Item"
                    primary={true}
                    onClick={this.openMealItemMaker} />

                <MealItemMaker
                    open={this.state.mealItemMakerOpen}
                    onClose={this.onMealItemMakerClosed} />

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
