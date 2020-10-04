import React, { Component } from 'react';

export default class WhoIsHere extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}