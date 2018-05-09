import React, { Component } from 'react';

class DisplayNumber extends Component {
    localizeNumber(number) {
        if (!number) {
            return '';
        }

        return number.toLocaleString();
    }

    render() {
        return <span>{this.localizeNumber(this.props.number)}</span>;
    }
}

export default DisplayNumber;