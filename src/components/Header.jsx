import React, { Component } from 'react';
import {TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

export default class Header extends Component {
    render() {
        return (
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Points to sell</TableHeaderColumn>
                    <TableHeaderColumn>Price per point</TableHeaderColumn>
                </TableRow>
            </TableHeader>
        )
    }
}