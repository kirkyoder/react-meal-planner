import React, { Component } from 'react';
import '../styles/mealitem.css';

class MealItem extends Component {
    render() {
        return (
            <div className="meal-item">
                <div class="name">{this.props.name}</div>
                <div className="nutrition-facts">
                    <p>Calories: {this.props.calories}</p>
                    <p>Protein: {this.props.protein}</p>
                    <p>Carbs: {this.props.carbs}</p>
                    <p>Fat: {this.props.fat}</p>
                </div>
            </div>
        );
    }
}

export default MealItem;
