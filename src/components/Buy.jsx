import React, { Component } from 'react';
import Header from './Header';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { browserHistory } from 'react-router';
import Mailto from 'react-mailto'

export default class Buy extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
        this.getListOfItems = this.getListOfItems.bind(this);
        // this.cellClicked = this.cellClicked.bind(this);
        this.getListOfItems();
    }

    componentDidMount() {
        setInterval(this.getListOfItems, 5000);
    }

    getListOfItems() {
        fetch('https://d15c8e70.ngrok.io/get/cwu/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                posts: responseJson
            })
        })
    }
    render() {
        this.state.posts.sort((current,next) => {
            return current.price - next.price;
        })
        const list = this.state.posts.map((document, i) => {
            return (<TableRow key={i}>
                <TableRowColumn><Mailto email={document.email} obfuscate={true}>Email me!</Mailto></TableRowColumn>
                <TableRowColumn>{document.amount}</TableRowColumn>
                <TableRowColumn>$0.{document.price}</TableRowColumn>
            </TableRow>)
        })
        return (
            <div>
                <Header current={'buy'}/>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>CWU Email</TableHeaderColumn>
                        <TableHeaderColumn>Points Available</TableHeaderColumn>
                        <TableHeaderColumn>Price/Point</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>
            </div>
        )
    }

    // cellClicked(row, col) {
    //     const rowData = this.state.posts[row];
    //     this.props.history.push('');
    // }
}