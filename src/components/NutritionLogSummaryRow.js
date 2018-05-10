import React, { Component } from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';

import DisplayNumber from './DisplayNumber';
import NutritionLogRow from './NutritionLogRow';

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

        const asPercentageOfTotal = function(value) {
            return parseFloat(value / (protein + carbs + fat)).toFixed(2);
        }

        return {
            calories: sum,
            protein: { value: protein, percentage: asPercentageOfTotal(protein) },
            carbs: { value: carbs, percentage: asPercentageOfTotal(carbs) },
            fat: { value: fat, percentage: asPercentageOfTotal(fat) }
        };
    }

    render() {
        const summaries = this.updateSummaries(this.props.meals);

        return (
            <TableRow style={{ backgroundColor: '#eee', fontWeight: 'bold' }}>
                <TableRowColumn style={{ width: '40%' }}></TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={summaries.calories} />
                </TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={summaries.protein.value} />
                    <span style={{ fontWeight: 'normal '}}>&nbsp;
                        (<DisplayNumber number={summaries.protein.percentage} asPercentage={true} />)
                    </span>
                </TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={summaries.carbs.value} />
                    <span style={{ fontWeight: 'normal '}}>&nbsp;
                        (<DisplayNumber number={summaries.carbs.percentage} asPercentage={true} />)
                    </span>
                </TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={summaries.fat.value} />
                    <span style={{ fontWeight: 'normal '}}>&nbsp;
                        (<DisplayNumber number={summaries.fat.percentage} asPercentage={true} />)
                    </span>
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default NutritionLogSummaryRow;
