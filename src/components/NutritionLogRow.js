import React, { Component } from 'react';

class NutritionLogRow extends Component {
    render() {
        return (
            <tr mealid={this.props.mealid} onClick={this.props.onRemove}>
                <td>{this.props.name}</td>
                <td>{this.props.calories}</td>
                <td>{this.props.protein}</td>
                <td>{this.props.carbs}</td>
                <td>{this.props.fat}</td>
            </tr>
        );
    }
}

export default NutritionLogRow;
