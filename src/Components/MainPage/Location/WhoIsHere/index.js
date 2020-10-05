import React, { Component } from 'react';
import {Badge} from "reactstrap"

export default class WhoIsHere extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <h2>
                <Badge>{this.props.name}</Badge>
            </h2>
        );
    }
}