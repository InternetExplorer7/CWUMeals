import React, { Component } from 'react';
import Header from './Header';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
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
        fetch('https://khorram.herokuapp.com/get/cwu/posts', {
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
            var FacebookLink = 'https://facebook.com/' + document.fbid;
            return (<TableRow key={i}>
                <TableRowColumn><img className="img-circle" src={document.profilepic}/></TableRowColumn>
                <TableRowColumn><a href={FacebookLink}>Message me on Facebook!</a></TableRowColumn>
                <TableRowColumn>{document.amount}</TableRowColumn>
                <TableRowColumn>${document.price}</TableRowColumn>
            </TableRow>)
        })
        return (
            <div>
                <Header current={'buy'}/>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Profile picture</TableHeaderColumn>
                        <TableHeaderColumn>Contact</TableHeaderColumn>
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