import React, { Component } from 'react';

import NutritionLogRow from './NutritionLogRow.js';
import NutritionLogSummaryRow from './NutritionLogSummaryRow.js';

import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableFooter } from 'material-ui/Table';

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

    onRemove(mealId) {
        this.props.onClick(mealId);
    }

    render() {
        // todo: handling null "this.props.mealItems"
        return (
            <Table selectable={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Calories</TableHeaderColumn>
                        <TableHeaderColumn>Protein</TableHeaderColumn>
                        <TableHeaderColumn>Carbs</TableHeaderColumn>
                        <TableHeaderColumn>Fat</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody showRowHover={true}>
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
                </TableBody>
                <TableFooter>
                    <NutritionLogSummaryRow meals={this.props.mealItems} />
                </TableFooter>
            </Table>
        );
    }
}

export default NutritionLog;
