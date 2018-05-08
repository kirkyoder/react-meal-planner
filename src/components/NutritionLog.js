import React, { Component } from 'react';

import MealItemModel from '../models/MealItemModel.js';

class NutritionLog extends Component {
    constructor(properties) {
        super(properties)

        this.state = {
            mealItems: [
                new MealItemModel({
                    name: 'Mediterranean Turkey Burger',
                    calories: 248,
                    protein: 30,
                    carbs: 6,
                    fat: 12
                })
            ]
        }
    }

    // addMealItem() {
    //     let mealItem = new MealItemModel({
    //         name: 'Lemon Chicken',
    //         calories: 276,
    //         protein: 32,
    //         carbs: 1,
    //         fat: 14
    //     });

    //     this.setState((prevState, props) => ({
    //         mealItems: prevState.mealItems.push(mealItem)
    //     }));
    // }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.mealItems.map(function (meal, index) {
                        return (
                            <tr key={index}>
                                <td>{meal.name}</td>
                                <td>{meal.calories}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default NutritionLog;
