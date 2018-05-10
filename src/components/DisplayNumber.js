import React, { Component } from 'react';

class DisplayNumber extends Component {
    localizeNumber(number) {
        if (number === null || number === undefined) {
            return '';
        }

        return number.toLocaleString();
    }

    asPercentage(number, precision = 0) {
        if (number === null || number === undefined || isNaN(number)) {
            return '0%';
        }

        console.log(number);

        return (number * 100).toFixed(precision) + '%';
    }

    render() {
        let value = '';
        if (this.props.asPercentage === true) {
            value = this.asPercentage(this.props.number);
        } else {
            value = this.localizeNumber(this.props.number);
        }

        return <span style={this.props.style}>{value}</span>;
    }
}

export default DisplayNumber;
