import React, { Component } from 'react';
import Header from './Header';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class Buy extends Component {
    render() {
        return (
            <div>
                <Header current={'buy'}/>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Points Available</TableHeaderColumn>
                        <TableHeaderColumn>Price/Point</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>250</TableRowColumn>
                        <TableRowColumn>$0.26</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>90</TableRowColumn>
                        <TableRowColumn>$0.20</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>120 Sanders</TableRowColumn>
                        <TableRowColumn>$0.20</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>140</TableRowColumn>
                        <TableRowColumn>$0.19</TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}