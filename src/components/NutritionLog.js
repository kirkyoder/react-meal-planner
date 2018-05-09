import React, { Component } from 'react';
import '../styles/nutrition-log.css';

import NutritionLogRow from './NutritionLogRow.js';
import NutritionLogSummaryRow from './NutritionLogSummaryRow.js';

class NutritionLog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalCalories: 0,
            totalProtein: 0,
            totalCarbs: 0,
            totalFat: 0
        }

        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(e) {
        let targetId = e.currentTarget.getAttribute('mealid');
        this.props.onClick(targetId);
    }

    render() {
        // todo: handling null "this.props.mealItems"
        return (
            <div className="nutrition-log">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Calories</th>
                            <th>Protein</th>
                            <th>Carbs</th>
                            <th>Fat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mealItems.map(function (meal) {
                            let mealItem = meal.meal;
                            return (
                                <NutritionLogRow
                                    key={meal.id}
                                    mealid={meal.id}
                                    name={mealItem.name}
                                    calories={mealItem.calories}
                                    protein={mealItem.protein}
                                    carbs={mealItem.carbs}
                                    fat={mealItem.fat}
                                    onRemove={this.onRemove} />
                            );
                        }, this)}
                    </tbody>
                    <tfoot>
                        <NutritionLogSummaryRow meals={this.props.mealItems} />
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default NutritionLog;
