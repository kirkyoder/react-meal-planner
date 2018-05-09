import React, { Component } from 'react';

class NutritionLog extends Component {
    constructor(props) {
        super(props);

        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(e) {
        this.props.onClick(e);
    }

    calculateCalories() {
        let sum = 0;
        this.props.mealItems.forEach(mealItem => {
            sum += mealItem.meal.calories;
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
                            let mealItem = meal.meal;
                            return (
                                <tr key={index} mealid={meal.id} onClick={this.onRemove}>
                                    <td>{mealItem.name}</td>
                                    <td>{mealItem.calories}</td>
                                </tr>
                            );
                        }, this)}
                    </tbody>
                </table>
                <p>Total Calories: {this.calculateCalories()}</p>
            </div>
        );
    }
}

export default NutritionLog;
