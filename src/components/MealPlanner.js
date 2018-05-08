import React, { Component } from 'react';

import MealDatabase from '../data/Meals.js';

import MealItem from './MealItem.js';
import NutritionLog from './NutritionLog.js';

class MealPlanner extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log(this);
        console.log(e);
    }

    render() {
        return (
            <div>
                <div>
                    {MealDatabase.map(function (meal, index) {
                        return <MealItem key={index} {...meal} onClick={this.handleClick} />;
                    }, this)}
                </div>

                <NutritionLog />
            </div>
        );
    }
}

export default MealPlanner;
