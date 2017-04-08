import React, { Component } from 'react';
import Header from './Header';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

export default class Sell extends Component {
    render() {
        return (
            <div>
                <Header current={'sell'}/>
                <div className="sell container">
                    <Card>
                        <CardHeader
                            title="Make a new post; sell your points!"
                            subtitle="Turn your unused Meal Points turn into $$."
                        />
                        <CardText>
                            <TextField ref="amount" hintText="Amount of points?"/>
                            <br/>
                            <TextField ref="price" hintText="How much per point?"/>
                            <br/>
                            <TextField ref="email" hintText="CWU E-mail"/>
                            <br/>
                        </CardText>
                    </Card>
                </div>
            </div>
        )
    }
}