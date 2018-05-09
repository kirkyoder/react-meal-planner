import React, { Component } from 'react';
import Card, { CardTitle, CardText, CardActions } from 'material-ui/Card';
import { FlatButton, Subheader, ListItem } from 'material-ui';

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
        const items = [
            { name: 'Calories', value: this.state.model.calories },
            { name: 'Protein', value: this.state.model.protein },
            { name: 'Carbs', value: this.state.model.carbs },
            { name: 'Fat', value: this.state.model.fat },
        ];
        const text = (
            <div>
                {items.map(function(item, index) {
                    let separator = index === items.length - 1 ? '' : ', ';
                    return <span key={index}>{item.name}: {item.value}{separator}</span>
                })}
            </div>
        );

        return (
            <ListItem
                primaryText={this.state.model.name}
                onClick={this.handleClick}
                secondaryText={text} />
        );
    }
}

export default MealItem;
