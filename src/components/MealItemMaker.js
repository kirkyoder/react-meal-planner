import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class MealItemMaker extends Component {
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.props.onClose} />
        ];

        return (
            <Dialog
                title="Add New Meal Item"
                modal={false}
                actions={actions}
                open={this.props.open}>
                <TextField
                    hintText="Meal Name"
                    floatingLabelText="Meal Name" />
            </Dialog>
        );
    }
}

export default MealItemMaker;
