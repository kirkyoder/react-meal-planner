import React, { Component } from 'react';

class DisplayNumber extends Component {
    localizeNumber(number) {
        if (number === null || number === undefined) {
            return '';
        }

        return number.toLocaleString();
    }

    render() {
        return <span>{this.localizeNumber(this.props.number)}</span>;
    }
}

export default DisplayNumber;
