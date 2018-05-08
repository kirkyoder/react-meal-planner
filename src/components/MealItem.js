import React, { Component } from 'react';
import '../styles/mealitem.css';

class MealItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: props.model
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e, this.state.model);
    }

    render() {
        return (
            <div className="meal-item" onClick={this.handleClick}>
                <div className="name">{this.state.model.name}</div>
                <div className="nutrition-facts">
                    <p>Calories: {this.state.model.calories}</p>
                    <p>Protein: {this.state.model.protein}</p>
                    <p>Carbs: {this.state.model.carbs}</p>
                    <p>Fat: {this.state.model.fat}</p>
                </div>
            </div>
        );
    }
}

export default MealItem;
