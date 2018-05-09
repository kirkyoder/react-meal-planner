import React, { Component } from 'react';

import { Subheader, List } from 'material-ui';

import MealDatabase from '../data/Meals';
import MealItem from './MealItem';
import NutritionLog from './NutritionLog';

var _mealPlannerEntryId = 0;

class MealPlanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meals: [
                { id: _mealPlannerEntryId++, meal: MealDatabase[0] },
                { id: _mealPlannerEntryId++, meal: MealDatabase[1] }
            ]
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
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

    render() {
        return (
            <div>
                <div>
                    <List>
                        <Subheader>Meals</Subheader>
                        {MealDatabase.map(function (meal, index) {
                            return <MealItem key={index} model={meal} onClick={this.handleClick} />;
                        }, this)}
                    </List>
                </div>

                <NutritionLog mealItems={this.state.meals} onClick={this.handleRemove} />
            </div>
        );
    }
}

export default MealPlanner;
