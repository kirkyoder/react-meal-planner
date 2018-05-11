import React, { Component } from 'react';

import MealItem from './MealItem';

class MealItemEnumerator extends Component {
    render() {
        const meals = this.props.meals;

        let mealItems = [];
        meals.forEach(function(meal, index) {
            mealItems.push(
                <MealItem key={index} model={meal} onClick={this.props.onItemClicked} />
            );
        }, this);

        return mealItems;
    }
}

export default MealItemEnumerator;
