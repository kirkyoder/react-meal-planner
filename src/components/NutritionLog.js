import React, { Component } from 'react';

class NutritionLog extends Component {
    calculateCalories() {
        let sum = 0;
        this.props.mealItems.forEach(element => {
            sum += element.calories;
        });

        return sum;
    }

    render() {
        // todo: handling null "this.props.mealItems"
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mealItems.map(function (meal, index) {
                            return (
                                <tr key={index}>
                                    <td>{meal.name}</td>
                                    <td>{meal.calories}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <p>Total Calories: {this.calculateCalories()}</p>
            </div>
        );
    }
}

export default NutritionLog;
