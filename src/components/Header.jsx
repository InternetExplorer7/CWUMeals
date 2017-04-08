import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            underline: 'buy'
        }
    }
    render() {
        return (
            <h2>FS</h2>
        )
    }
}

Header.PropTypes = {
    underline:PropTypes.string.isRequired,
}