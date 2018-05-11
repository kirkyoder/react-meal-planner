import React, { Component } from 'react';

import NutritionLogRow from './NutritionLogRow';
import NutritionLogSummaryRow from './NutritionLogSummaryRow';

import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableFooter } from 'material-ui/Table';
import { Subheader } from 'material-ui';

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
            <div>
                <Subheader>Nutrition Log</Subheader>
                <Table selectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={{ width: '30%' }}>Name</TableHeaderColumn>
                            <TableHeaderColumn>Calories</TableHeaderColumn>
                            <TableHeaderColumn>Protein (g)</TableHeaderColumn>
                            <TableHeaderColumn>Carbs (g)</TableHeaderColumn>
                            <TableHeaderColumn>Fat (g)</TableHeaderColumn>
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
            </div>
        );
    }
}

export default NutritionLog;
