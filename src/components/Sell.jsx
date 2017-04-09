import React, { Component } from 'react';
import Header from './Header';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import FacebookLogin from 'react-facebook-login';

export default class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            price: '',
            email: '',
            open: false,
            message: '',
            disabledOpen: true,
            facebookData: {}

        }
        this.updateAmount = this.updateAmount.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.makeSellPost = this.makeSellPost.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.responseFacebook = this.responseFacebook.bind(this);
    }
    render() {
        const actions = [
        <FlatButton
            label="Okay"
            primary={true}
            keyboardFocused={false}
            onTouchTap={this.handleClose}
        />,
        ];
        console.log(JSON.stringify(this.state));
        return (
            <div>
            <Dialog
                title="Message"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >{this.state.message}</Dialog>
                <Header current={'sell'}/>
                <div className="sell container">
                    <Card>
                        <CardHeader
                            title="Make a new post; sell your points!"
                            subtitle="Turn your unused Meal Points turn into $$."
                        />
                        <CardText>
                            <TextField onChange={this.updateAmount} hintText="Amount of points?"/>
                            <br/>
                            <TextField onChange={this.updatePrice} hintText="How much per point?"/>
                            <br/>
                            <TextField onChange={this.updateEmail} hintText="CWU E-mail"/>
                            <br/>
                            <FacebookLogin
                                appId="423311558018987"
                                autoLoad={false}
                                fields="name,email,picture, id, link"
                                callback={this.responseFacebook}
                            />
                            <br />
                            <br />
                            <FlatButton disabled={this.state.disabledOpen} onTouchTap={this.makeSellPost} label="submit" backgroundColor={'rgb(0,188,212'}/>
                        </CardText>
                    </Card>
                </div>
            </div>
        )
    }

    updateAmount(event, newValue) {
        this.setState({
            amount: newValue
        })
    }

    updatePrice(event, newValue) {
        this.setState({
            price: newValue
        })
    }

    updateEmail(event, newValue) {
        this.setState({
            email: newValue
        })
    }

    makeSellPost() {
        fetch('https://khorram.herokuapp.com/cwu', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // If the response is valid, redirect to -
            // - buy page and give toast.
            // Otherwise, empty form and notify user.
            console.log(responseJson)
            this.setState({
                open: true,
                message: responseJson.message
            })
        })
    }
    
    handleClose() {
        this.setState({
            open: false
        })
    }

    responseFacebook(response) {
        console.log('rFacebook: ' + JSON.stringify(response));
        this.setState({
            disabledOpen: !this.state.disabledOpen,
            facebookData: response
        })
    }
}