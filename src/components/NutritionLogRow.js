import React, { Component } from 'react';

import DisplayNumber from './DisplayNumber';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class NutritionLogRow extends Component {
    constructor(props) {
        super(props);

        this.onLogRowClick = this.onLogRowClick.bind(this);
    }

    onLogRowClick() {
        this.props.onRemove(this.props.mealid)
    }

    render() {
        const {
            name,
            calories,
            protein,
            carbs,
            fat,
            onRemove,
            mealid,
            ...passedOnProps
        } = this.props;

        return (
            <TableRow {...passedOnProps} mealid={mealid} onRowClick={this.onLogRowClick}>
                <TableRowColumn style={{ width: '50%' }}>{name}</TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={calories} />
                </TableRowColumn>
                <TableRowColumn>{protein}</TableRowColumn>
                <TableRowColumn>{carbs}</TableRowColumn>
                <TableRowColumn>{fat}</TableRowColumn>
            </TableRow>
        );
    }
}

export default NutritionLogRow;
