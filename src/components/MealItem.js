import React, { Component } from 'react';
import Card, { CardTitle, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { FlatButton } from 'material-ui';

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
            <Card>
                <CardTitle title={this.state.model.name} />
                <CardText>
                    <div>Calories: {this.state.model.calories}</div>
                    <div>Protein: {this.state.model.protein}</div>
                    <div>Carbs: {this.state.model.carbs}</div>
                    <div>Fat: {this.state.model.fat}</div>
                </CardText>
                <CardActions>
                    <FlatButton label="Add to Meal Plan" secondary={true} onClick={this.handleClick} />
                </CardActions>
            </Card>
        );
    }
}

export default MealItem;
