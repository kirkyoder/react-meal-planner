import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import FormValidationHelper from '../helpers/FormValidationHelper';

class MealItemMaker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                name: null,
                calories: null,
                protein: null,
                carbs: null,
                fat: null
            },
            errors: {}
        }
    }

    handleCancel = () => {
        this.props.onClose();
        this.setState({ errors: {} });
    }

    handleClose = (e) => {
        const isValid = this.handleValidation();
        if (!isValid) {
            return;
        }

        const payload = this.state.fields;
        this.props.onClose(payload);
    }

    handleValidation = () => {
        let isValid = true;
        let errors = {};

        const fieldValidators = {
            name:       FormValidationHelper.isValidString,
            calories:   FormValidationHelper.isPositiveNumber,
            protein:    FormValidationHelper.isPositiveNumber,
            carbs:      FormValidationHelper.isPositiveNumber,
            fat:        FormValidationHelper.isPositiveNumber
        };

        const fields = this.state.fields;
        for (let key in fields) {
            const validator = fieldValidators[key];
            if (validator !== null) {
                const result = validator(fields[key]);
                if (result !== null && !result.isValid) {
                    isValid = false;
                    errors[key] = result.message;
                }
            }
        }

        this.setState({ errors: errors });

        return isValid;
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState(function(prevState, props) {
            return {
                fields: Object.assign(prevState.fields, { [name]: value })
            }
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.handleCancel} />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleClose} />
        ];

        const fields = [
            <TextField
                name="name"
                hintText="Meal Name"
                floatingLabelText="Meal Name"
                errorText={this.state.errors.name}
                onChange={this.handleInputChange} />,
            <TextField
                name="calories"
                hintText="Calories"
                floatingLabelText="Calories"
                errorText={this.state.errors.calories}
                onChange={this.handleInputChange} />,
            <TextField
                name="protein"
                hintText="Protein"
                floatingLabelText="Protein"
                errorText={this.state.errors.protein}
                onChange={this.handleInputChange} />,
            <TextField
                name="carbs"
                hintText="Carbs"
                floatingLabelText="Carbs"
                errorText={this.state.errors.carbs}
                onChange={this.handleInputChange} />,
            <TextField
                name="fat"
                hintText="Fat"
                floatingLabelText="Fat"
                errorText={this.state.errors.fat}
                onChange={this.handleInputChange} />
        ];

        return (
            <Dialog
                title="Add New Meal Item"
                modal={false}
                actions={actions}
                open={this.props.open}>

                {fields.map(function(field, index) {
                    return (
                        <div key={index}>{field}</div>
                    );
                })}

            </Dialog>
        );
    }
}

export default MealItemMaker;
