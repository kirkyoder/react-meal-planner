import React, { Component } from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';

import DisplayNumber from './DisplayNumber';

class NutritionLogRow extends Component {
    constructor(props) {
        super(props);

        this.onLogRowClick = this.onLogRowClick.bind(this);
    }

    onLogRowClick() {
        if (!this.props.onRemove) {
            return;
        }

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
            style,
            ...passedOnProps
        } = this.props;

        const rowStyle = Object.assign({
            cursor: 'pointer'
        }, style);

        return (
            <TableRow {...passedOnProps} mealid={mealid} onRowClick={this.onLogRowClick} style={rowStyle}>
                <TableRowColumn style={{ width: '40%' }}>{name}</TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={calories} />
                </TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={protein} />
                </TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={carbs} />
                </TableRowColumn>
                <TableRowColumn>
                    <DisplayNumber number={fat} />
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default NutritionLogRow;
