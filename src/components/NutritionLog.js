import React, { Component } from 'react';

class NutritionLog extends Component {
    render() {
        // todo: handling null "this.props.mealItems"
        return (
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
        );
    }
}

export default NutritionLog;
