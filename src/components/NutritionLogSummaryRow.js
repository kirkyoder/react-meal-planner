import React, { Component } from 'react';

import NutritionLogRow from './NutritionLogRow.js';

class NutritionLogSummaryRow extends Component {
    updateSummaries(meals) {
        let sum = 0;
        let protein = 0;
        let carbs = 0;
        let fat = 0;

        meals.forEach(mealItem => {
            let meal = mealItem.meal;

            sum += meal.calories;
            protein += meal.protein;
            carbs += meal.carbs;
            fat += meal.fat;
        });

        return {
            calories: sum,
            protein: protein,
            carbs: carbs,
            fat: fat
        };
    }

    render() {
        const summaries = this.updateSummaries(this.props.meals);

        return (
            <NutritionLogRow
                calories={summaries.calories}
                protein={summaries.protein}
                carbs={summaries.carbs}
                fat={summaries.fat}
                style={{
                    backgroundColor: '#eee',
                    fontWeight: 'bold'
                }} />
        );
    }
}

export default NutritionLogSummaryRow;
