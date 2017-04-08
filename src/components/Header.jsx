import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

export default class Header extends Component {
    constructor(props) {
        super(props);
        var elState = {
            buy: 'white',
            sell: 'white',
            faq: 'white'
        }
        elState[props.current] = 'rgb(0,188,212)';
        this.state = elState;
    }
    render() {
        return (
            <div className="container">
                <div className="buySellFaqList">
                    <FlatButton backgroundColor={this.state.buy} href="/buy" label="Buy" />
                    <FlatButton backgroundColor={this.state.sell} href="/sell" label="Sell" />
                    <FlatButton backgroundColor={this.state.faq} href="/faq" label="Faq" />
                </div>
            </div>
        )
    }
}

Header.PropTypes = {
    underline: PropTypes.string.isRequired,
}